type MediaImg = {
  ext: string
  hash: string
  height: number
  width: number
  mime: string
  name: string
  size: number
  url: string
}

export type MediaType = {
  id?: string
  documentId?: string
  url?: string
  fullUrl?: string
  format?: {
    large?: MediaImg
    medium?: MediaImg
    small?: MediaImg
    thumbnail?: MediaImg
  }
}

export type UserType = {
  id: string
  username: string
  avatar: MediaType
  email: string
}

export type TenantType = {
  id: string
  name: string
  logo?: MediaType
  domain: string
  documentId: string
}

export type CategoryType = {
  id: string
  documentId: string
  type: number
  name: string
  slug: string
  icon?: MediaType
}

export type WebsiteType = {
  id: string
  name: string
  cover?: MediaType
  favicon?: MediaType
  description: string
  url: string
}
