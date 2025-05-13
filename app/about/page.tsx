import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, BookOpen, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-cyan-600 via-blue-500 to-cyan-400 text-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Acerca de MarkupVerse
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Nuestra misión es hacer del aprendizaje sobre lenguajes de marcado
            una experiencia accesible, visual e inspiradora.
          </p>
        </div>
      </header>

      {/* Navigation */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/"
            className="flex items-center text-cyan-600 font-medium"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Home
          </Link>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Nuestra Historia
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                MarkupVerse nace en 2025 como una iniciativa educativa enfocada
                en enseñar HTML, XML, Markdown y otros lenguajes de marcado de
                forma moderna e interactiva.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                La educación tradicional sobre estos lenguajes suele ser densa y
                textual. Nosotros apostamos por una forma multimedia, accesible
                y visual para que cualquier persona, sin importar su nivel,
                pueda aprender desde cero. Somos un equipo de estudiantes,
                desarrolladores y entusiastas del frontend decididos a crear una
                plataforma hecha por programadores, para programadores.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
              Somos un equipo de estudiantes, desarrolladores y entusiastas del frontend decididos a crear una plataforma hecha por programadores, para programadores.
              </p>
            </div>
            <div className="md:w-1/2 relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/img/study.jpg?height=600&width=800"
                alt="Nuestro Equipo"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-cyan-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Nuestros Valores
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center mb-6 mx-auto">
                <BookOpen className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Aprendizaje Accesible
              </h3>
              <p className="text-gray-600">
                Creemos que los lenguajes de marcado deben estar al alcance de
                todos, sin importar su experiencia previa.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-6 mx-auto">
                <Heart className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Pasión por el Código
              </h3>
              <p className="text-gray-600">
                Nos mueve el entusiasmo por crear contenido que inspire y motive
                a aprender más sobre el desarrollo web.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-6 mx-auto">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Colaboración Técnica
              </h3>
              <p className="text-gray-600">
                Valoramos la comunidad de desarrolladores que comparte, enseña y
                mejora colectivamente sus conocimientos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Nuestro Equipo
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src="/img/mon.jpeg?height=300&width=300"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Monserrat Caballero
              </h3>
              <p className="text-cyan-600">Developer</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src="https://cdn.vectorstock.com/i/500p/29/09/avatar-m-vector-37332909.jpg?height=300&width=300"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Luis Angel Ramirez Julian
              </h3>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src="https://cdn.vectorstock.com/i/500p/29/09/avatar-m-vector-37332909.jpg?height=300&width=300"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Jennifer Martinez
              </h3>
            </div>

            {/* Team Member 4 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src="https://cdn.vectorstock.com/i/500p/29/09/avatar-m-vector-37332909.jpg?height=300&width=300"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Jennifer
              </h3>
            </div>

            {/* Team Member 5 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src="https://cdn.vectorstock.com/i/500p/29/09/avatar-m-vector-37332909.jpg?height=300&width=300"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Martin Osorio Pascual
              </h3>
            </div>

            {/* Profesora */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src="https://cdn.vectorstock.com/i/500p/29/09/avatar-m-vector-37332909.jpg?height=300&width=300"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Maria de los Angeles Martínez
              </h3>
              <p className="text-cyan-600">Docente</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 via-blue-500 to-cyan-400 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para Explorar?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Sumérgete en el universo de los lenguajes de marcado y empieza tu
            viaje como desarrollador web.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-cyan-600 hover:bg-gray-100"
          >
            <Link href="/encyclopedia">Empieza a explorar</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">MarkupVerse</h2>
              <p className="text-gray-400">
                La guía interactiva sobre lenguajes de marcado para
                programadores
              </p>
            </div>
            <div className="flex gap-6">
              <Link
                href="/encyclopedia"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Encyclopedia
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Conocenos
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contacto
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            © {new Date().getFullYear()} MarkupVerse. Todos los derechos
            reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
