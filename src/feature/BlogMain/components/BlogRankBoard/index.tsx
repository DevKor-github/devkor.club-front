import { css } from '@styled-stytem/css'
import { HStack, VStack } from '@styled-stytem/jsx'

import Github from '@/assets/Github.svg'
import Insta2 from '@/assets/Insta2.svg'

const BlogRankBoard = () => {
  return (
    <VStack w="full" maxW="260px" display={{ SDown: 'none' }}>
      <HStack w="full" justifyContent="flex-end" gap={3}>
        <a href="https://github.com/DevKor-github" target="_blank">
          <img src={Github} alt="Github" />
        </a>
        <a href="https://www.instagram.com/devkor.ku/" target="_blank">
          <img src={Insta2} alt="Insta2" />
        </a>
      </HStack>
      <VStack w="full" gap={6} mt="4" alignItems="flex-start">
        <p className={css({ fontSize: 13, fontWeight: 500, color: 'label.50' })}>인기글 TOP 3</p>
        <VStack w="full" gap={1.5} alignItems="flex-start">
          <p className={css({ fontSize: 15, fontWeight: 600, color: 'primary.DEFAULT' })}>
            효율적인 코드, 프레임워크의 이해에서부터
          </p>
          <p className={css({ fontSize: 13, fontWeight: 500, color: 'label.70' })}>박한준</p>
        </VStack>
        <VStack w="full" gap={1.5} alignItems="flex-start">
          <p className={css({ fontSize: 15, fontWeight: 600, color: 'primary.DEFAULT' })}>
            네이버지도 API 사용해보며 CORS 배우기
          </p>
          <p className={css({ fontSize: 13, fontWeight: 500, color: 'label.70' })}>박한준</p>
        </VStack>
        <VStack w="full" gap={1.5} alignItems="flex-start">
          <p className={css({ fontSize: 15, fontWeight: 600, color: 'primary.DEFAULT' })}>
            옥탈리시스 프레임워크 기반 게이미피케이션 적용
          </p>
          <p className={css({ fontSize: 13, fontWeight: 500, color: 'label.70' })}>박한준</p>
        </VStack>
      </VStack>
      <VStack w="full" gap={6} mt="70px" alignItems="flex-start">
        <p className={css({ fontSize: 13, fontWeight: 500, color: 'label.50' })}>키워드 태그</p>
        <HStack w="full" rowGap="1.5" columnGap="2" flexWrap="wrap">
          <TagChip text="API" />
          <TagChip text="게이미피케이션" />
          <TagChip text="UX 디자인" />
          <TagChip text="광고" />
          <TagChip text="추천시스템" />
          <TagChip text="DB" />
          <TagChip text="와이어프레임" />
        </HStack>
      </VStack>
    </VStack>
  )
}

export default BlogRankBoard

const TagChip = ({ text }: { text: string }) => {
  return (
    <div
      className={css({
        p: '0.25rem 0.5rem',
        bg: '#F1F3F4',
        borderRadius: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      })}
    >
      <p className={css({ fontSize: 13, fontWeight: 500, color: 'label.50' })}>{text}</p>
    </div>
  )
}
