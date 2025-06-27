'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { Artist } from '@/types'


type ArtistContextType = {
  artists: Artist[]
  addArtist: (artist: Artist) => void
}

const ArtistContext = createContext<ArtistContextType | undefined>(undefined)

export function ArtistProvider({ children }: { children: ReactNode }) {
  const [artists, setArtists] = useState<Artist[]>([])

  const addArtist = (artist: Artist) => {
    setArtists((prev) => [...prev, artist])
  }

  return (
    <ArtistContext.Provider value={{ artists, addArtist }}>
      {children}
    </ArtistContext.Provider>
  )
}

export const useArtistContext = () => {
  const context = useContext(ArtistContext)
  if (!context) {
    throw new Error('useArtistContext must be used within an ArtistProvider')
  }
  return context
}
