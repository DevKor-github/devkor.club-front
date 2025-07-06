import { VStack } from '@styled-stytem/jsx'

import BlogBanner from '@/assets/Blog-Banner.png'
import BlogContentSection from '@/feature/BlogMain/components/BlogContentSection'
const BlogMainPage = () => {
  return (
    <VStack
      w="full"
      h={{ L: `calc(100svh - 69px)`, M: `calc(100svh - 10px)` }}
      mt={{ L: 69, M: 10, SDown: 16 }}
      gap={50}
    >
      <img src={BlogBanner} alt="Blog Banner" />
      <BlogContentSection />
    </VStack>
  )
}

export default BlogMainPage
