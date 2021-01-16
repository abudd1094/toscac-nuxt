export enum pageNames {
  'home',
  'about',
  'archive',
  'concerts',
  'contact',
  'events',
  'garden',
  'getInvolved',
  'programs',
  'restoration',
  'studio',
}

export enum postTypes {
  'archive',
  'event',
  'program',
}

export interface StrapiImageObject {
  alternativeText: string
  caption: string
  created_at: string
  ext: string
  formats: any
  hash: string
  height: number
  id: number
  mime: string
  name: string
  previewUrl: null
  provider: string
  provider_metadata: null
  size: number
  updated_at: string
  url: string
  width: number
}

// COLLECTIONS
export interface PagesResponse {
  bottomText?: string | null
  created_at: string
  headline: string
  id: number
  // media array will be images
  media?: StrapiImageObject[] | null
  pageName: pageNames
  published_at: string
  topText?: string
  updated_at: string
}

export interface PostsResponse {
  title: string
  description: string
  image?: StrapiImageObject | null
  type: postTypes | null
  id: number
  created_at: string
  published_at: string
  topText?: string
  updated_at: string
}

// EXTENSIONS
export interface PostsData extends PagesResponse {
  posts: PostsResponse[] | []
}
