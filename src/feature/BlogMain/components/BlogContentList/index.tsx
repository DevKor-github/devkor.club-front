import { VStack } from '@styled-stytem/jsx'

import BlogContentFeeds from '@/feature/BlogMain/components/BlogContentFeeds'
import BlogContentTabs from '@/feature/BlogMain/components/BlogContentTabs'

const BlogContentList = () => {
  return (
    <VStack w="full" gap={50}>
      <BlogContentTabs />
      <BlogContentFeeds />
    </VStack>
  )
}

export default BlogContentList
