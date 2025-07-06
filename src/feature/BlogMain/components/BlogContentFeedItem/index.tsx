import { css } from '@styled-stytem/css'
import { HStack, VStack } from '@styled-stytem/jsx'

import image3D from '@/assets/image3D.png'

const BlogContentFeedItem = () => {
  return (
    <HStack w="full" gap={10} smDown={{ alignItems: 'flex-start' }}>
      <VStack w="full" gap={3} alignItems="flex-start" smDown={{ gap: 1.5 }}>
        <p className={css({ fontSize: 20, fontWeight: 600, color: 'primary.DEFAULT', smDown: { fontSize: 16 } })}>
          효율적인 코드, 프레임워크의 이해에서부터
        </p>
        <p
          className={css({
            fontSize: 14,
            fontWeight: 500,
            color: 'label.70',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            lineClamp: 2,
            smDown: { fontSize: 13 }
          })}
        >
          {
            '북마크 API 개발 중 사용자가 특정 항목을 북마크했는지 단순히 확인하려고 Optional <Entity>로 엔티티 전체를 조회하는 방식을 썼지만 비효율적임을 깨달았어요. 북마크 API 개발 중 사용자가 특정 항목을 북마크했는지 단순히 확인하려고 Optional <Entity>로 엔티티 전체를 조회하는 방식을 썼지만 비효율적임을 깨달았어요.'
          }
        </p>
        <HStack
          w="full"
          gap="9px"
          alignItems="center"
          color="label.70"
          fontSize={14}
          fontWeight={400}
          smDown={{ fontSize: 13 }}
        >
          <p>박한준</p>
          <p>2025.07.06</p>
        </HStack>
      </VStack>
      <div
        className={css({
          w: 150,
          h: 100,
          borderRadius: '16px',
          overflow: 'hidden',
          flexShrink: 0,
          smDown: { w: 100, h: 20 }
        })}
      >
        <img
          src={image3D}
          alt="image3D"
          className={css({
            w: 'full',
            h: 'full',
            objectFit: 'cover',
            objectPosition: 'center'
          })}
        />
      </div>
    </HStack>
  )
}

export default BlogContentFeedItem
