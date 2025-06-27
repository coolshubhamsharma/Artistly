'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import MultiSelect from '@/components/MultiSelect'
import { toast } from 'sonner'

import { useArtistContext } from '@/context/ArtistContext'
import { v4 as uuidv4 } from 'uuid'

import { useRouter } from 'next/navigation'


// Define Zod schema for validation
const schema = z.object({
  name: z.string().min(2),
  bio: z.string().min(10),
  location: z.string().min(2),
  category: z.array(z.string()).min(1, 'Select at least one category'),
  languages: z.array(z.string()).min(1, 'Choose at least one language'),
  fees: z.string().nonempty(),
  image: z.any().optional(), // file input
})

type FormData = z.infer<typeof schema>

export default function OnboardPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      bio: '',
      location: '',
      category: [],
      languages: [],
      fees: '',
      image:''
    },
  })

  const { addArtist } = useArtistContext()
   const router = useRouter()
  


  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const onSubmit = (data: FormData) => {
    const newArtist = {
      id: uuidv4(),
      ...data,
      image: imagePreview || '', // Manually inject image into payload
    }
    addArtist(newArtist)
    toast.success('Artist profile added!')
    router.push('/artists') // Redirect to listing page
  }



  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Onboard a New Artist</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <Input placeholder="Name" {...register('name')} />
        {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}

        <Textarea placeholder="Short bio..." rows={4} {...register('bio')} />
        {errors.bio && <p className="text-sm text-red-600">{errors.bio.message}</p>}

        <Input placeholder="Location" {...register('location')} />
        {errors.location && <p className="text-sm text-red-600">{errors.location.message}</p>}

        <MultiSelect
          label="Select Categories"
          options={['Singer', 'Dancer', 'DJ', 'Speaker']}
          onChange={(val: string[]) => setValue('category', val)}
        />
        {errors.category && <p className="text-sm text-red-600">{errors.category.message}</p>}

        <MultiSelect
          label="Languages Spoken"
          options={['Hindi', 'English', 'Tamil', 'Bengali']}
          onChange={(val: string[]) => setValue('languages', val)}
        />
        {errors.languages && <p className="text-sm text-red-600">{errors.languages.message}</p>}

        <select {...register('fees')} className="w-full border p-2 rounded">
          <option value="">Select Fee Range</option>
          <option value="₹10k–₹25k">₹10k–₹25k</option>
          <option value="₹25k–₹50k">₹25k–₹50k</option>
          <option value="₹50k–₹75k">₹50k–₹75k</option>
          <option value="₹75k+">₹75k+</option>
        </select>
        {errors.fees && <p className="text-sm text-red-600">{errors.fees.message}</p>}

        {/* Profile Image Upload */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0]
            if (file) {
              const reader = new FileReader()
              reader.onload = () => {
                const previewUrl = reader.result?.toString()
                setImagePreview(previewUrl || null)
              }
              reader.readAsDataURL(file)
            }
          }}
          className="w-full border p-2 rounded"
        />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Artist Preview"
            className="w-32 h-32 object-cover rounded-md mt-2"
          />
        )}

        <Button type="submit" className='hover:cursor-pointer bg-white border'>Submit Artist</Button>
      </form>
    </div>
  )
}
