'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Artist } from '@/types'

type Props = {
  isOpen: boolean
  onClose: () => void
  artist: Artist | null
}

export default function ArtistDetailModal({ isOpen, onClose, artist }: Props) {
  if (!artist) return null

  const { name, image, category, location, fees, bio, languages } = artist

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-white">
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
        </DialogHeader>

        {image ? (
          <img
            src={image}
            alt={`${name} profile`}
            className="rounded-lg w-full h-48 object-cover mb-4"
          />
        ) : (
          <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400">
            No image available
          </div>
        )}

        <div className="space-y-2 text-sm text-gray-700">
          <p><strong>Category:</strong> {Array.isArray(category) ? category.join(', ') : category}</p>
          <p><strong>Location:</strong> {location}</p>
          <p><strong>Fee:</strong> {fees}</p>
          {languages?.length > 0 && (
            <p><strong>Languages:</strong> {languages.join(', ')}</p>
          )}
          {bio && (
            <p><strong>Bio:</strong> <span className="text-gray-600">{bio}</span></p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
