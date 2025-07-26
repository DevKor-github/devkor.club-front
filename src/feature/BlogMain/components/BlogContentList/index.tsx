import { VStack } from '@styled-stytem/jsx'
import { Suspense } from 'react'

import Spinner from '@/components/ui/spinner'
import BlogContentFeeds from '@/feature/BlogMain/components/BlogContentFeeds'
import BlogContentTabs from '@/feature/BlogMain/components/BlogContentTabs'

const BlogContentList = () => {
  return (
    <VStack w="full" gap={50}>
      <BlogContentTabs />
      <Suspense fallback={<Spinner />}>
        <BlogContentFeeds />
      </Suspense>
    </VStack>
  )
}

export default BlogContentList
