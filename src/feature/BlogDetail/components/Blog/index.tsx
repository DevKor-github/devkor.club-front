import { VStack } from '@styled-stytem/jsx'
import { useParams } from 'react-router-dom'

import { useReadBlogPost } from '@/domain/blog/hooks/useReadBlogPost'
import BlogContent from '@/feature/BlogDetail/components/BlogContent'
import BlogCoverImage from '@/feature/BlogDetail/components/BlogCoverImage'
import BlogHeader from '@/feature/BlogDetail/components/BlogHeader'

const Blog = () => {
  const { id } = useParams()
  const { data } = useReadBlogPost(id)
  if (!data) return null
  return (
    <VStack w="full" marginTop="4.25rem" maxW="51.125rem" alignItems="center">
      <BlogHeader {...data} />
      <BlogCoverImage coverImageUrl={data.coverImageUrl} />
      <BlogContent content={data.content} />
    </VStack>
  )
}

export default Blog
