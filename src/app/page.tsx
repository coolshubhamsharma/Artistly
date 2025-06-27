'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  const categories = [
    { label: 'Singer', emoji: '🎤' },
    { label: 'DJ', emoji: '🎧' },
    { label: 'Dancer', emoji: '💃' },
    { label: 'Speaker', emoji: '🎙️' },
  ]

  return (
    <main className="min-h-screen p-6">
      {/* Hero Section */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">Welcome to Artistly</h1>
        <p className="text-lg text-gray-600 mb-5">
          A platform where Event Planners and Artist Managers connect through performing talent.
        </p>
        <Link href="/artists">
          <Button className="hover:cursor-pointer bg-white border">Explore Artists</Button>
        </Link>
      </section>

      {/* Category Cards as Filter Links */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.label}
            href={`/artists?category=${encodeURIComponent(cat.label)}`}
            className="rounded-lg border shadow-sm bg-white p-5 text-center hover:shadow-md transition hover:bg-indigo-50"
          >
            <div className="text-4xl mb-2">{cat.emoji}</div>
            <p className="text-lg font-semibold text-gray-800">{cat.label}s</p>
          </Link>
        ))}
      </section>
    </main>
  )
}
