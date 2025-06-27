// components/CategoryCard.tsx
import Image from 'next/image'
import Link from 'next/link'

type CategoryCardProps = {
  title: string
  image: string
}

export default function CategoryCard({ title, image }: CategoryCardProps) {
  return (
    <Link href={`/artists?category=${title}`}>
      <div className="bg-white border rounded-lg shadow-sm hover:shadow-md transition overflow-hidden cursor-pointer">
        <Image
          src={image}
          alt={`${title} category`}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
      </div>
    </Link>
  )
}
