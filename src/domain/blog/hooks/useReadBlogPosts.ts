import { useSuspenseQuery } from '@tanstack/react-query'

import { apiClient } from '@/api/apiClient'
import { BlogPostsReqParams, BlogPostsResponse } from '@/domain/blog/hooks/types'

export const getBlogPosts = async ({ page, size, position, tags, sortBy }: BlogPostsReqParams) => {
  const response = await apiClient.get<BlogPostsResponse>('/blog/posts', {
    params: {
      page,
      size,
      position,
      tags,
      sortBy
    }
  })
  return response.data.data
}

export const useReadBlogPosts = ({ page, position, tags, sortBy }: BlogPostsReqParams) => {
  return useSuspenseQuery({
    queryKey: ['blogPosts', page, position, tags, sortBy],
    queryFn: () => getBlogPosts({ page, size: 10, position, tags, sortBy })
  })
}
