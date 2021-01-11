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

export interface PagesResponse {
  bottomText?: string | null
  created_at: string
  headline: string
  id: number
  // media array will be images
  media?: any[] | null
  pageName: pageNames
  published_at: string
  topText?: string
  updated_at: string
}
