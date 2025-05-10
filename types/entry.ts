export interface Entry {
  id: string
  title: string
  content: string
  excerpt?: string
  image?: string
  imageCaption?: string
  secondaryImage?: string
  secondaryImageCaption?: string
  audio?: string
  videos?: string[] // YouTube video IDs
  categories?: string[]
  references?: string[]
}
