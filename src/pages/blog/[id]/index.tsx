import { VStack } from '@styled-stytem/jsx'
import { Suspense } from 'react'

import Spinner from '@/components/ui/spinner'
import Blog from '@/feature/BlogDetail/components/Blog'

const BlogDetailPage = () => {
  return (
    <VStack
      w="full"
      h={{ L: `calc(100svh - 4.5rem)`, SDown: `calc(100svh - 3.6875rem)` }}
      mt={{ S: '4.5rem', SDown: '3.6875rem' }}
      gap={{ S: 50, SDown: 30 }}
    >
      <Suspense fallback={<Spinner />}>
        <Blog />
      </Suspense>
    </VStack>
  )
}

export default BlogDetailPage
