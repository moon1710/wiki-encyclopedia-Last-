"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Something went wrong!</h1>
      <p className="text-gray-500 mb-8 text-center max-w-md">
        We apologize for the inconvenience. An error occurred while trying to load this page.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button onClick={reset} variant="default">
          Try again
        </Button>
        <Button asChild variant="outline">
          <Link href="/">Return to Homepage</Link>
        </Button>
      </div>
    </div>
  )
}
