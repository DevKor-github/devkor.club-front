import { css } from '@styled-stytem/css'
import { HStack, VStack } from '@styled-stytem/jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import removeMd from 'remove-markdown'

import image3D from '@/assets/image3D.png'
import { BlogPost } from '@/domain/blog/hooks/types'

const BlogContentFeedItem = ({ title, content, author, createdAt, coverImageUrl, id }: BlogPost) => {
  const cleanContent = removeMd(content) // 마크다운 문법 제거

  const [isHover, setIsHover] = useState(false)
  const navigate = useNavigate()
  return (
    <HStack
      w="full"
      gap={10}
      smDown={{ alignItems: 'flex-start', gap: 5 }}
      cursor="pointer"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      borderBottom="1px solid"
      borderColor="{colors.border}"
      paddingBottom={5}
      _last={{ borderBottom: 'none' }}
      onClick={() => navigate(`/blog/${id}`)}
    >
      <VStack w="full" gap={3} alignItems="flex-start" smDown={{ gap: 1.5 }}>
        <p
          className={css({
            fontSize: 20,
            fontWeight: 600,
            smDown: { fontSize: 16 },
            color: isHover ? 'secondary.70' : 'primary.DEFAULT',
            transition: 'color 0.2s ease-in-out'
          })}
        >
          {title}
        </p>
        <p
          className={css({
            fontSize: 14,
            fontWeight: 500,
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            smDown: { fontSize: 13 },
            color: isHover ? 'muted.foreground' : 'label.70',
            transition: 'color 0.2s ease-in-out',
            wordBreak: 'break-all'
          })}
          style={{
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical'
          }}
        >
          {cleanContent}
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
          <p>{author}</p>
          <p>
            {new Date(createdAt)
              .toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
              })
              .replace(/\. /g, '.')
              .replace(/\.$/, '')}
          </p>
        </HStack>
      </VStack>
      <div
        className={css({
          w: 150,
          h: 100,
          pos: 'relative',
          borderRadius: '16px',
          overflow: 'hidden',
          flexShrink: 0,
          smDown: { w: 100, h: 20 }
        })}
      >
        <img
          src={coverImageUrl ?? image3D}
          alt="image3D"
          className={css({
            w: 'full',
            h: 'full',
            objectFit: 'cover',
            objectPosition: 'center'
          })}
        />
        <div
          className={css({
            pos: 'absolute',
            top: 0,
            left: 0,
            w: 'full',
            h: 'full',
            borderRadius: '16px',
            border: '1px solid rgba(0, 0, 0, 0.05)'
          })}
        ></div>
      </div>
    </HStack>
  )
}

export default BlogContentFeedItem
