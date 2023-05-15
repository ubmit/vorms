'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function BasicSuccess() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/')
    }, 3000)

    return () => clearTimeout(timer)
  }, [router])

  return <div>Success! Redirecting to the home page after 3 seconds...</div>
}
