"use client"

import { useState, useEffect, useRef } from "react"
import { useParams, notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Volume2, VolumeX, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import data from "@/data/encyclopedia.json"
import type { Entry } from "@/types/entry"

export default function EntryPage() {
  const params = useParams<{ id: string }>()
  const [entry, setEntry] = useState<Entry | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // In Next.js App Router, params.id could be an array or string
    // Convert to string to ensure proper comparison
    const entryId = Array.isArray(params.id) ? params.id[0] : params.id.toString()

    const foundEntry = data.entries.find((e) => e.id === entryId)
    if (foundEntry) {
      setEntry(foundEntry)
    }
  }, [params.id])

  if (!entry) {
    return <h2 className="text-center py-24">Entrada no encontrada 😢</h2>;
  }  

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const nextVideo = () => {
    if (entry.videos && entry.videos.length > 0) {
      setCurrentVideoIndex((currentVideoIndex + 1) % entry.videos.length)
    }
  }

  const prevVideo = () => {
    if (entry.videos && entry.videos.length > 0) {
      setCurrentVideoIndex((currentVideoIndex - 1 + entry.videos.length) % entry.videos.length)
    }
  }

  // Function to render content with basic HTML support
  const renderContent = (content: string) => {
    // Split content by paragraphs
    const paragraphs = content.split("\n\n")

    return paragraphs.map((paragraph, index) => {
      // Check if paragraph is a heading (starts with # or ##)
      if (paragraph.startsWith("## ")) {
        return (
          <h2 key={index} className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
            {paragraph.replace("## ", "")}
          </h2>
        )
      } else if (paragraph.startsWith("# ")) {
        return (
          <h1 key={index} className="text-3xl font-bold mt-10 mb-6 text-gray-800">
            {paragraph.replace("# ", "")}
          </h1>
        )
      }

      // Regular paragraph
      return (
        <p key={index} className="my-4 text-gray-700 leading-relaxed text-lg">
          {paragraph}
        </p>
      )
    })
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navigation */}
      <div className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/encyclopedia" className="flex items-center text-cyan-600 font-medium">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Encyclopedia
            </Link>

            {entry.audio && (
              <Button variant="outline" size="sm" className="flex items-center gap-2" onClick={toggleAudio}>
                {isPlaying ? (
                  <>
                    <VolumeX className="h-4 w-4" /> Pausar Narración
                  </>
                ) : (
                  <>
                    <Volume2 className="h-4 w-4" /> Escuchar
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
      </div>

      <article className="flex-grow">
        {/* Audio (hidden) */}
        {entry.audio && (
          <audio ref={audioRef} src={entry.audio} onEnded={() => setIsPlaying(false)} className="hidden" />
        )}

        {/* Title Section */}
        <header className="bg-gradient-to-r from-cyan-600 via-cyan-500 to-blue-400 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{entry.title}</h1>
            {entry.categories && (
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {entry.categories.map((category) => (
                  <Badge key={category} className="bg-white/20 hover:bg-white/30 text-white">
                    {category}
                  </Badge>
                ))}
              </div>
            )}
            <p className="text-xl max-w-3xl mx-auto">{entry.excerpt}</p>
          </div>
        </header>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            {/* First Image */}
            {entry.image && (
              <div className="relative h-96 w-full">
                <Image
                  src={entry.image || "/placeholder.svg?height=600&width=800"}
                  alt={entry.title}
                  fill
                  className="object-cover"
                />
                {entry.imageCaption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 text-sm">
                    {entry.imageCaption}
                  </div>
                )}
              </div>
            )}

            {/* First Content Section */}
            <div className="p-8">{renderContent(entry.content.split("---")[0] || entry.content)}</div>

            {/* Second Image (if available) */}
            {entry.secondaryImage && (
              <div className="relative h-96 w-full">
                <Image
                  src={entry.secondaryImage || "/placeholder.svg?height=600&width=800"}
                  alt={`${entry.title} - additional image`}
                  fill
                  className="object-cover"
                />
                {entry.secondaryImageCaption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 text-sm">
                    {entry.secondaryImageCaption}
                  </div>
                )}
              </div>
            )}

            {/* Second Content Section (if available) */}
            {entry.content.includes("---") && <div className="p-8">{renderContent(entry.content.split("---")[1])}</div>}

            {/* Video Slider */}
            {entry.videos && entry.videos.length > 0 && (
              <div className="p-8 bg-gray-50">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Related Videos</h2>

                <div className="relative">
                  <div className="aspect-video rounded-lg overflow-hidden bg-black">
                    {entry.videos && entry.videos[currentVideoIndex] ? (
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${entry.videos[currentVideoIndex]}?rel=0`}
                        title={`${entry.title} video ${currentVideoIndex + 1}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-100">
                        <p className="text-gray-500">Video not available</p>
                      </div>
                    )}
                  </div>

                  {entry.videos.length > 1 && (
                    <div className="flex justify-between mt-4">
                      <Button variant="outline" size="icon" onClick={prevVideo} className="rounded-full">
                        <ChevronLeft className="h-5 w-5" />
                      </Button>

                      <div className="text-center">
                        <span className="text-sm text-gray-500">
                          {currentVideoIndex + 1} / {entry.videos.length}
                        </span>
                      </div>

                      <Button variant="outline" size="icon" onClick={nextVideo} className="rounded-full">
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* References */}
            {entry.references && entry.references.length > 0 && (
              <div className="p-8 border-t border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">References</h3>
                <ul className="list-decimal pl-5 text-gray-600 space-y-2">
                  {entry.references.map((reference, index) => (
                    <li key={index} className="text-sm">
                      {reference}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">ModernPedia</h2>
              <p className="text-gray-400">Expanding your knowledge horizons</p>
            </div>
            <div className="flex gap-6">
              <Link href="/encyclopedia" className="text-gray-300 hover:text-white transition-colors">
                Encyclopedia
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                Conocenos
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                Contacto
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            © {new Date().getFullYear()} ModernPedia. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
