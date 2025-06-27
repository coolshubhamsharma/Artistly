
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/artists', label: 'Artists' },
  { href: '/onboard', label: 'Onboard Artist' },
  { href: '/dashboard', label: 'Dashboard' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-indigo-600">
          Artistly
        </Link>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={clsx(
                  'text-gray-700 hover:text-indigo-600 font-medium',
                  pathname === item.href && 'text-indigo-600 underline'
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
