'use client'

import { useState } from 'react'
import { useArtistContext } from '@/context/ArtistContext'
import staticData from '@/data/manager-artists.json'
import DashboardTable from '@/components/DashboardTable'
import ArtistDetailModal from '@/components/ArtistDetailModel'
import { Artist } from '@/types'




export default function DashboardPage() {

  const { artists: contextArtists } = useArtistContext()
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Merge static and dynamic artists
  const allArtists: Artist[] = [
    ...staticData,
    ...contextArtists
  ]

  const handleView = (artist: Artist) => {
    console.log('Selected artist:', artist)
    setSelectedArtist(artist)
    setIsModalOpen(true)
  }
  

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Artist Manager Dashboard</h2>
      <DashboardTable data={allArtists} onView={handleView} />
      <ArtistDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        artist={selectedArtist}
      />
    </div>
  )
}
