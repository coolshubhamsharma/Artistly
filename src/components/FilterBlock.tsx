// components/FilterBlock.tsx
'use client'

import { useState } from 'react'

type Props = {
  filters: {
    category: string[]
    location: string[]
    fees: string[]
  }
  onFilterChange: (selected: {
    category: string[]
    location: string[]
    fees: string[]
  }) => void
}

export default function FilterBlock({ filters, onFilterChange }: Props) {
  // State to track user-selected filters
  const [selected, setSelected] = useState({
    category: [] as string[],
    location: [] as string[],
    fees: [] as string[],
  })

  // Toggle function for checkboxes
  const handleToggle = (type: string, value: string) => {
    const updated = selected[type as keyof typeof selected].includes(value)
      ? selected[type as keyof typeof selected].filter((item) => item !== value)
      : [...selected[type as keyof typeof selected], value]

    const newSelected = { ...selected, [type]: updated }
    setSelected(newSelected)
    onFilterChange(newSelected)
  }

  // Reusable checkbox list renderer
  const renderCheckboxGroup = (label: string, options: string[]) => (
    <div className="mb-4">
      <h4 className="text-sm font-semibold text-gray-700 mb-2">{label}</h4>
      <div className="flex flex-wrap gap-3">
        {options.map((item) => (
          <label key={item} className="text-sm text-gray-600 flex items-center gap-2">
            <input
              type="checkbox"
              checked={selected[label.toLowerCase() as keyof typeof selected]?.includes(item)}
              onChange={() => handleToggle(label.toLowerCase(), item)}
            />
            {item}
          </label>
        ))}
      </div>
    </div>
  )

  return (
    <aside className="bg-white border rounded-lg p-4 shadow-sm w-full sm:w-64">
      {renderCheckboxGroup('Category', filters.category)}
      {renderCheckboxGroup('Location', filters.location)}
      {renderCheckboxGroup('fees', filters.fees)}
    </aside>
  )
}
