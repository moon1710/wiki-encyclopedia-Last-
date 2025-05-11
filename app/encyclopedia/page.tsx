"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, ArrowLeft, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import data from "@/data/encyclopedia.json"
import type { Entry } from "@/types/entry"

export default function EncyclopediaPage() {
  const [entries, setEntries] = useState<Entry[]>([])
  const [filteredEntries, setFilteredEntries] = useState<Entry[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Extract unique categories from entries
  const categories = [...new Set(data.entries.flatMap((entry) => entry.categories || []))]

  useEffect(() => {
    if (data && data.entries) {
      // Make sure all entries have valid image paths or null (not empty strings)
      const processedEntries = data.entries.map((entry) => ({
        ...entry,
        image: entry.image && entry.image.trim() !== "" ? entry.image : "/placeholder.svg?height=400&width=600",
      }))

      setEntries(processedEntries)
      setFilteredEntries(processedEntries)
    }
  }, [])

  //Filtro pa busqueda
  useEffect(() => {
    let filtered = entries

    // Filter by search query
    if (searchQuery.trim() !== "") {
      filtered = filtered.filter(
        (entry) =>
          entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          entry.content.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter((entry) => entry.categories && entry.categories.includes(selectedCategory))
    }

    setFilteredEntries(filtered)
  }, [searchQuery, selectedCategory, entries])

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-cyan-600 via-pink-500 to-orange-400 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">MarkupVerse</h1>
          <p className="text-xl max-w-3xl mx-auto">Explora nuestra colección de entradas</p>
        </div>
      </header>

      {/* Navigation */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center text-cyan-600 font-medium">
            <ArrowLeft className="mr-2 h-4 w-4" /> Home
          </Link>
        </div>
      </div>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Buscar entradas..."
                className="pl-10 bg-white border-gray-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto">
              <Filter size={18} className="text-gray-500 flex-shrink-0" />
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`cursor-pointer ${
                    selectedCategory === category ? "bg-cyan-600 hover:bg-cyan-700" : "hover:bg-cyan-100"
                  }`}
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Entries Grid */}
      <section className="py-12 flex-grow">
        <div className="container mx-auto px-4">
          {filteredEntries.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No se encontraron resultados para tu búsqueda.</p>
              <Button
                variant="link"
                className="text-cyan-600 mt-2"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory(null)
                }}
              >
                Limpiar Filtros
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEntries.map((entry) => (
                <Link key={entry.id} href={`/encyclopedia/${entry.id}`} className="group">
                  <Card className="overflow-hidden h-full transition-all duration-300 group-hover:shadow-lg">
                    <div className="relative h-48">
                      <Image
                        src={entry.image || "/placeholder.svg?height=400&width=600"}
                        alt={entry.title}
                        fill
                        className="object-cover transition-all duration-500 group-hover:scale-105"
                      />
                      {entry.audio && (
                        <div className="absolute top-3 right-3 bg-white/80 rounded-full p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-cyan-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.414l-2.829-2.828a4 4 0 015.657-5.657l2.829 2.829m-2.829 2.828l2.829 2.829a4 4 0 01-5.657 5.657l-2.829-2.829"
                            />
                          </svg>
                        </div>
                      )}
                      {entry.videos && entry.videos.length > 0 && (
                        <div className="absolute top-3 left-3 bg-white/80 rounded-full p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-red-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-cyan-600 transition-colors">
                        {entry.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {entry.excerpt || entry.content.substring(0, 120) + "..."}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {entry.categories &&
                          entry.categories.map((category) => (
                            <Badge key={category} variant="secondary" className="bg-cyan-100 text-cyan-700">
                              {category}
                            </Badge>
                          ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">MarkupVerse</h2>
              <p className="text-gray-400">La guía interactiva para dominar los lenguajes de marcado</p>
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
            © {new Date().getFullYear()} MarkupVerse. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
