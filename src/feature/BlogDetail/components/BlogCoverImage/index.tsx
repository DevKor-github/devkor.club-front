import { css } from '@styled-stytem/css'

import { BlogPost } from '@/domain/blog/hooks/types'

const BlogCoverImage = ({ coverImageUrl }: Pick<BlogPost, 'coverImageUrl'>) => {
  if (!coverImageUrl) return null
  return (
    <div
      className={css({
        w: 'full',
        h: '32.0625rem',
        pos: 'relative',
        marginTop: '4.25rem'
      })}
    >
      <img
        src={coverImageUrl}
        alt="cover"
        srcSet={`${coverImageUrl} 1x, ${coverImageUrl} 2x`}
        className={css({ w: 'full', h: 'full', objectFit: 'cover', borderRadius: '37px' })}
      />
      <div
        className={css({
          pos: 'absolute',
          top: 0,
          left: 0,
          width: 'full',
          height: 'full',
          border: '1px solid',
          borderColor: 'rgba(0, 0, 0, 0.05)',
          borderRadius: '37px'
        })}
      ></div>
    </div>
  )
}

export default BlogCoverImage
