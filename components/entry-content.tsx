import Image from "next/image"
import type { Entry } from "@/types/entry"

interface EntryContentProps {
  entry: Entry
}

export default function EntryContent({ entry }: EntryContentProps) {
  // Function to render content with basic HTML support
  const renderContent = () => {
    // Split content by paragraphs
    const paragraphs = entry.content.split("\n\n")

    return paragraphs.map((paragraph, index) => {
      // Check if paragraph is a heading (starts with # or ##)
      if (paragraph.startsWith("## ")) {
        return (
          <h2 key={index} className="text-xl font-semibold mt-6 mb-3 text-gray-800">
            {paragraph.replace("## ", "")}
          </h2>
        )
      } else if (paragraph.startsWith("# ")) {
        return (
          <h1 key={index} className="text-2xl font-bold mt-8 mb-4 text-gray-800">
            {paragraph.replace("# ", "")}
          </h1>
        )
      }

      // Regular paragraph
      return (
        <p key={index} className="my-4 text-gray-700 leading-relaxed">
          {paragraph}
        </p>
      )
    })
  }

  return (
    <article className="bg-white rounded-lg shadow-sm p-6 md:p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{entry.title}</h1>

      {entry.image && entry.image.trim() !== "" ? (
        <div className="my-6 relative">
          <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-lg">
            <Image src={entry.image || "/placeholder.svg"} alt={entry.title} fill className="object-cover" />
          </div>
          {entry.imageCaption && <p className="text-sm text-gray-500 mt-2 text-center italic">{entry.imageCaption}</p>}
        </div>
      ) : null}

      <div className="prose max-w-none">{renderContent()}</div>

      {entry.references && entry.references.length > 0 && (
        <div className="mt-8 pt-4 border-t border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">References</h3>
          <ul className="list-decimal pl-5 text-sm text-gray-600 space-y-2">
            {entry.references.map((reference, index) => (
              <li key={index}>{reference}</li>
            ))}
          </ul>
        </div>
      )}
    </article>
  )
}
