import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 opacity-90 z-0"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-20 z-0"></div>

        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">ModernPedia</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Explore a world of knowledge with our interactive multimedia encyclopedia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100 hover:text-purple-700">
              <Link href="/encyclopedia">
                Start Exploring <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-purple-800 border-white text-white hover:bg-white/10">
              <Link href="/about">
                About Us <Info className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
            A New Way to Experience Knowledge
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6 mx-auto">
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-gray-800">Rich Multimedia Content</h3>
              <p className="text-gray-600 text-center">
                Experience knowledge through audio, images, text, and videos all in one place.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-pink-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-gray-800">Audio Narrations</h3>
              <p className="text-gray-600 text-center">
                Listen to professionally narrated content for an immersive learning experience.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-orange-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-gray-800">Video Galleries</h3>
              <p className="text-gray-600 text-center">
                Watch curated videos that bring complex topics to life with visual explanations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Entries */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
            Featured Encyclopedia Entries
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Discover some of our most popular and fascinating topics
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Entry 1 */}
            <Link href="/encyclopedia/1" className="group">
              <div className="rounded-xl overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-xl">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Quantum Computing"
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">Quantum Computing</h3>
                </div>
                <div className="p-6 bg-white">
                  <p className="text-gray-600 mb-4">
                    Explore the revolutionary computing paradigm that leverages quantum mechanics to perform complex
                    calculations.
                  </p>
                  <span className="text-purple-600 font-medium group-hover:text-purple-700 flex items-center">
                    Read more <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Entry 2 */}
            <Link href="/encyclopedia/2" className="group">
              <div className="rounded-xl overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-xl">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Artificial Intelligence"
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">Artificial Intelligence</h3>
                </div>
                <div className="p-6 bg-white">
                  <p className="text-gray-600 mb-4">
                    Discover how machines are programmed to think and learn like humans, revolutionizing our world.
                  </p>
                  <span className="text-purple-600 font-medium group-hover:text-purple-700 flex items-center">
                    Read more <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Entry 3 */}
            <Link href="/encyclopedia/3" className="group">
              <div className="rounded-xl overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-xl">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Climate Change"
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">Climate Change</h3>
                </div>
                <div className="p-6 bg-white">
                  <p className="text-gray-600 mb-4">
                    Learn about the long-term shifts in temperatures and weather patterns affecting our planet.
                  </p>
                  <span className="text-purple-600 font-medium group-hover:text-purple-700 flex items-center">
                    Read more <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              <Link href="/encyclopedia">
                View All Entries <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

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
                About Us
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                Contact
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
