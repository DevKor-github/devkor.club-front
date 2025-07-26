export type BlogPostsReqParams = {
  page?: number
  size?: number
  position?: 'BE' | 'FE' | 'PM' | 'PD' | 'DevOps'
  tags?: string[]
  sortBy?: 'createdAt' | 'viewCount'
}

export type BlogPostsResponse = {
  data: {
    items: BlogPost[]
    total: number
    page: number
    size: number
  }
  message: string
  status: number
}

export type BlogPostResponse = {
  data: BlogPost
  message: string
  status: number
}

export type BlogPost = {
  id: string
  title: string
  author: string
  position: string
  content: string
  coverImageUrl: string | null
  viewCount: number
  createdAt: string
  updatedAt: string
  tags: string[]
}
