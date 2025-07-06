import { VStack } from '@styled-stytem/jsx'

import BlogContentFeedItem from '@/feature/BlogMain/components/BlogContentFeedItem'

const BlogContentFeeds = () => {
  return (
    <VStack w="full" gap="60px" maxW="708px">
      <BlogContentFeedItem />
      <BlogContentFeedItem />
      <BlogContentFeedItem />
      <BlogContentFeedItem />
      <BlogContentFeedItem />
      <BlogContentFeedItem />
      <BlogContentFeedItem />
      <BlogContentFeedItem />
      <BlogContentFeedItem />
      <BlogContentFeedItem />
    </VStack>
  )
}

export default BlogContentFeeds
