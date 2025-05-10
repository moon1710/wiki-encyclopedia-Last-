"use client"

import type { Entry } from "@/types/entry"

interface EntryListProps {
  entries: Entry[]
  selectedEntry: Entry | null
  onSelectEntry: (entry: Entry) => void
}

export default function EntryList({ entries, selectedEntry, onSelectEntry }: EntryListProps) {
  if (entries.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-4 text-center">
        <p className="text-gray-500">No entries found</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <ul className="divide-y divide-gray-100">
        {entries.map((entry) => (
          <li key={entry.id}>
            <button
              onClick={() => onSelectEntry(entry)}
              className={`w-full text-left px-4 py-3 transition-colors hover:bg-gray-50 focus:outline-none focus:bg-gray-50 ${
                selectedEntry?.id === entry.id ? "bg-blue-50" : ""
              }`}
            >
              <h3 className={`font-medium ${selectedEntry?.id === entry.id ? "text-blue-600" : "text-gray-800"}`}>
                {entry.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                {entry.excerpt || entry.content.substring(0, 100)}...
              </p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
