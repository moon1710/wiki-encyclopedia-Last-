import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, BookOpen, Users, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-cyan-600 via-pink-500 to-orange-400 text-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About ModernPedia</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Our mission is to make knowledge accessible, engaging, and interactive for everyone
          </p>
        </div>
      </header>

      {/* Navigation */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center text-cyan-600 font-medium">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                ModernPedia was founded in 2023 with a simple yet ambitious goal: to reimagine how people interact with
                encyclopedic knowledge in the digital age.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Traditional encyclopedias present information in a static, text-heavy format. We believed there was a
                better way—one that engages multiple senses and learning styles through rich multimedia content.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team of educators, technologists, and content creators came together to build an encyclopedia
                platform that combines authoritative information with immersive audio, stunning visuals, and engaging
                videos.
              </p>
            </div>
            <div className="md:w-1/2 relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=600&width=800" alt="Our Team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-cyan-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center mb-6 mx-auto">
                <BookOpen className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Accessible Knowledge</h3>
              <p className="text-gray-600">
                We believe knowledge should be accessible to everyone, regardless of learning style or ability.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-6 mx-auto">
                <Heart className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Passion for Learning</h3>
              <p className="text-gray-600">
                We're passionate about creating content that inspires curiosity and a lifelong love of learning.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-6 mx-auto">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Community Driven</h3>
              <p className="text-gray-600">
                We believe in the power of community to create, curate, and improve knowledge together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                <Image src="/placeholder.svg?height=300&width=300" alt="Team Member" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Sarah Johnson</h3>
              <p className="text-cyan-600">Founder & CEO</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                <Image src="/placeholder.svg?height=300&width=300" alt="Team Member" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Michael Chen</h3>
              <p className="text-cyan-600">Chief Content Officer</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                <Image src="/placeholder.svg?height=300&width=300" alt="Team Member" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Aisha Patel</h3>
              <p className="text-cyan-600">Head of Technology</p>
            </div>

            {/* Team Member 4 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                <Image src="/placeholder.svg?height=300&width=300" alt="Team Member" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">David Rodriguez</h3>
              <p className="text-cyan-600">Creative Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 via-pink-500 to-orange-400 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Explore?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Dive into our encyclopedia and discover a new way to experience knowledge
          </p>
          <Button asChild size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
            <Link href="/encyclopedia">Start Exploring</Link>
          </Button>
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
