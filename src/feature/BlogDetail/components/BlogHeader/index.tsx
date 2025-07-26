import { css } from '@styled-stytem/css'
import { VStack } from '@styled-stytem/jsx'

import Chip from '@/components/ui/chip'
import { HStack } from '@/components/ui/hstack'
import { BlogPost } from '@/domain/blog/hooks/types'

const BlogHeader = ({ title, author, createdAt, position, tags }: BlogPost) => {
  return (
    <VStack
      gap={7}
      w="full"
      alignItems="flex-start"
      paddingBottom="1.9375rem"
      borderBottom="1px solid {colors.label.BG}"
    >
      <h1
        className={css({
          fontSize: 48,
          fontWeight: 600,
          color: '#3D4043',
          lineHeight: '140%',
          wordBreak: 'keep-all',
          wordWrap: 'break-word'
        })}
      >
        {title}
      </h1>
      <HStack gap="2.3125rem" alignItems="flex-end">
        <VStack gap={2.5} alignItems="flex-start" fontSize={17} fontWeight={500} color="label.50" lineHeight="100%">
          <HStack gap={2} alignItems="center">
            <p>{position}</p>
            <p>{author}</p>
          </HStack>
          <p className={css({ fontSize: 14, fontWeight: 400 })}>
            {new Date(createdAt).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </VStack>
        <HStack gap={2.5} alignItems="center">
          {tags.map(tag => (
            <Chip key={tag}>#{tag}</Chip>
          ))}
        </HStack>
      </HStack>
    </VStack>
  )
}

export default BlogHeader
