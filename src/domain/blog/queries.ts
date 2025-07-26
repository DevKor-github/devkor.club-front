import { BlogPostsReqParams } from '@/domain/blog/hooks/types'

export const BLOG_QUERY_KEY = {
  base: () => ['blog'],
  post: (id: string) => [...BLOG_QUERY_KEY.base(), id, 'post'],
  posts: ({ page, size, position, tags, sortBy }: BlogPostsReqParams) => [
    ...BLOG_QUERY_KEY.base(),
    'posts',
    page,
    size,
    position,
    tags,
    sortBy
  ]
}
