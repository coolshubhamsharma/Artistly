// components/DashboardTable.tsx

import { Artist } from "@/types"

type Props = {
  data: Artist[]
  onView: (artist: Artist) => void
}

export default function DashboardTable({ data, onView }: Props) {
  return (
    <div className="overflow-x-auto rounded-lg border bg-white shadow">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-gray-100 text-gray-600">
          <tr>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Category</th>
            <th className="px-4 py-3">Location</th>
            <th className="px-4 py-3">Fee</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {data.map((artist) => (
            <tr key={artist.id}>
              <td className="px-4 py-3">{artist.name}</td>
              <td className="px-4 py-3">{artist.category.join(', ')}</td>
              <td className="px-4 py-3">{artist.location}</td>
              <td className="px-4 py-3">{artist.fees}</td>
              <td className="px-4 py-3">
                <button
                  onClick={() => onView(artist)}
                  className="text-indigo-600 hover:underline text-sm hover:cursor-pointer"
                > 
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
