// components/MultiSelect.tsx
'use client'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Command,
  CommandGroup,
  CommandItem,
} from '@/components/ui/command'
import { Button } from '@/components/ui/button'
import { Check, ChevronsUpDown } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

type Props = {
  label: string
  options: string[]
  onChange: (selected: string[]) => void
}

export default function MultiSelect({ label, options, onChange }: Props) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<string[]>([])

  const handleSelect = (value: string) => {
    let updated: string[]
    if (selected.includes(value)) {
      updated = selected.filter((v) => v !== value)
    } else {
      updated = [...selected, value]
    }
    setSelected(updated)
    onChange(updated)
  }

  return (
    <div className="w-full">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className="w-full justify-between"
          >
            {selected.length > 0 ? selected.join(', ') : `Select ${label}`}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option}
                  onSelect={() => handleSelect(option)}
                  className="cursor-pointer"
                >
                  <div
                    className={cn(
                      'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-muted',
                      selected.includes(option) ? 'bg-primary text-primary-foreground' : 'opacity-50'
                    )}
                  >
                    {selected.includes(option) && (
                      <Check className="h-4 w-4" />
                    )}
                  </div>
                  <span>{option}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
