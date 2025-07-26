import { VStack } from '@styled-stytem/jsx'
import { useQueryStates } from 'nuqs'

import { BlogPostsReqParams } from '@/domain/blog/hooks/types'
import { useReadBlogPosts } from '@/domain/blog/hooks/useReadBlogPosts'
import BlogContentFeedItem from '@/feature/BlogMain/components/BlogContentFeedItem'
import BlogPagination from '@/feature/BlogMain/components/BlogPagination'

const BlogContentFeeds = () => {
  const [query] = useQueryStates({
    tab: { parse: value => value as BlogPostsReqParams['position'] },
    page: { parse: value => Number(value) }
  })

  const {
    data: { items, total }
  } = useReadBlogPosts({ size: 10, position: query.tab ?? undefined, page: query.page ?? 1 })

  const totalPage = Math.ceil(total / 10)
  return (
    <>
      <VStack w="full" gap="40px" maxW="708px">
        {items.map(item => (
          <BlogContentFeedItem key={item.id} {...item} />
        ))}
      </VStack>
      <BlogPagination totalPage={totalPage} />
    </>
  )
}

export default BlogContentFeeds
