'use client'

import { useEffect, useState, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'

import FilterBlock from '@/components/FilterBlock'
import ArtistCard from '@/components/ArtistCard'
import artistsData from '@/data/artists.json'
import { Artist } from '@/types'
import { useArtistContext } from '@/context/ArtistContext'

export default function ArtistsPage() {
  const { artists: contextArtists } = useArtistContext()

  type FilterState = {
    category: string[]
    location: string[]
    fees: string[]
  }

  const [filters, setFilters] = useState<FilterState>({
    category: [],
    location: [],
    fees: [],
  })

  // Handle initial query param on the client
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const categoryFromUrl = searchParams.get('category')
    if (categoryFromUrl) {
      setFilters((prev) => ({
        ...prev,
        category: categoryFromUrl ? [categoryFromUrl] : [],
      }))
    }
  }, [])

  const mergedArtists: Artist[] = useMemo(() => {
    return [
      ...artistsData,
      ...contextArtists.map((artist) => ({
        ...artist,
        fees: artist.fees,
      })),
    ]
  }, [contextArtists])

  const [filteredArtists, setFilteredArtists] = useState<Artist[]>(mergedArtists)

  const filterOptions = useMemo(() => ({
    category: [...new Set(mergedArtists.flatMap((a) => a.category))],
    location: [...new Set(mergedArtists.map((a) => a.location))],
    fees: [...new Set(mergedArtists.map((a) => a.fees))],
  }), [mergedArtists])

  useEffect(() => {
    const result = mergedArtists.filter((artist) => {
      const matchCategory =
        filters.category.length === 0 ||
        artist.category.some((cat) => filters.category.includes(cat))

      const matchLocation =
        filters.location.length === 0 || filters.location.includes(artist.location)

      const matchFees =
        filters.fees.length === 0 || filters.fees.includes(artist.fees)

      return matchCategory && matchLocation && matchFees
    })

    setFilteredArtists(result)
  }, [filters, mergedArtists])

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Sidebar Filters */}
      <FilterBlock filters={filterOptions} onFilterChange={setFilters} />

      {/* Artist Grid */}
      <section className="flex-1">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Browse Artists</h2>
        {filteredArtists.length === 0 ? (
          <p className="text-gray-600">No artists match the selected filters.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArtists.map((artist) => (
              <ArtistCard
                key={artist.id}
                name={artist.name}
                category={artist.category}
                location={artist.location}
                fees={artist.fees}
                image={artist.image}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
