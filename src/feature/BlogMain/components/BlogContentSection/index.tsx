import { HStack } from '@styled-stytem/jsx'

import BlogContentList from '@/feature/BlogMain/components/BlogContentList'
import BlogRankBoard from '@/feature/BlogMain/components/BlogRankBoard'

const BlogContentSection = () => {
  return (
    <HStack gap={62} w="full" maxW="1038px" justifySelf="center" alignItems="flex-start" px={{ SDown: 4 }} pb={67}>
      <BlogContentList />
      <BlogRankBoard />
    </HStack>
  )
}

export default BlogContentSection
