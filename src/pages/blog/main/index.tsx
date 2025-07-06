import { VStack } from '@styled-stytem/jsx'

import BlogBanner from '@/assets/Blog-Banner.png'
import BlogContentSection from '@/feature/BlogMain/components/BlogContentSection'
const BlogMainPage = () => {
  return (
    <VStack
      w="full"
      h={{ L: `calc(100svh - 4.5rem)`, SDown: `calc(100svh - 3.6875rem)` }}
      mt={{ S: '4.5rem', SDown: '3.6875rem' }}
      gap={{ S: 50, SDown: 30 }}
    >
      <img src={BlogBanner} alt="Blog Banner" />
      <BlogContentSection />
    </VStack>
  )
}

export default BlogMainPage
