import { useSuspenseQuery } from '@tanstack/react-query'

import { apiClient } from '@/api/apiClient'
import { BlogPostResponse } from '@/domain/blog/hooks/types'
import { BLOG_QUERY_KEY } from '@/domain/blog/queries'

export const getBlogPost = async (id: string) => {
  const response = await apiClient.get<BlogPostResponse>(`/blog/posts/${id}`)
  return response.data.data
}

export const useReadBlogPost = (id: string | undefined) => {
  return useSuspenseQuery({
    queryKey: BLOG_QUERY_KEY.post(id ?? ''),
    queryFn: () => (id ? getBlogPost(id) : Promise.resolve(null))
  })
}
