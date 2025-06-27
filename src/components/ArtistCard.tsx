// components/ArtistCard.tsx

// import { StaticImport } from 'next/dist/shared/lib/get-img-props'
// import Image from 'next/image'

type Props = {
  name: string
  category: string[]
  location: string
  fees: string
  image?: string
}

export default function ArtistCard({ name, category, location, fees, image }: Props) {
  return (
    <div className="bg-white border rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
      {/* Artist image */}
      <img src={image} alt={name} className="w-[100%] h-60 object-cover" />

      {/* Artist info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500 mb-1">{category} • {location}</p>
        <p className="text-sm text-gray-700 font-medium">{fees}</p>
        {/* CTA */}
        {/* <button className="mt-3 w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition">
          Ask for Quote
        </button> */}
      </div>
    </div>
  )
}
