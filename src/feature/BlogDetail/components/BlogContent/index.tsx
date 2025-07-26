import { css, cx } from '@styled-stytem/css'
import { chip } from '@styled-stytem/recipes'
import { isValidElement, ReactElement } from 'react'
import ReactMarkdown from 'react-markdown'

import { BlogPost } from '@/domain/blog/hooks/types'

const BlogContent = ({ content }: Pick<BlogPost, 'content'>) => {
  return (
    <div
      className={css({
        w: 'full',
        h: 'full',
        marginTop: '8.1875rem',
        color: 'label.50'
      })}
    >
      <ReactMarkdown
        components={{
          // 커스텀 컴포넌트
          h3: ({ children }) => (
            <h3
              className={css({
                fontSize: '2rem',
                fontWeight: 700,
                lineHeight: '100%',
                color: 'label.20',
                marginBottom: '2.5rem'
              })}
            >
              {children}
            </h3>
          ),
          hr: () => null,
          li: ({ children }) => (
            <li
              className={css({
                marginBottom: '0.5rem',
                lineHeight: '1.6',
                paddingLeft: '0.5rem'
              })}
            >
              {children}
            </li>
          ),
          ul: ({ children }) => (
            <ul
              className={css({
                marginBottom: '1rem',
                paddingLeft: '1.5rem',
                listStyleType: 'disc' // • 마커
              })}
            >
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol
              className={css({
                marginBottom: '1rem',
                paddingLeft: '1.5rem',
                listStyleType: 'decimal' // 1, 2, 3... 마커
              })}
            >
              {children}
            </ol>
          ),
          blockquote: ({ children }) => (
            <blockquote
              className={css({
                fontSize: '1rem',
                fontWeight: 400,
                lineHeight: '100%',
                color: 'label.20',
                borderLeft: '2px solid',
                borderColor: 'label.20',
                paddingLeft: '0.5rem',
                marginBottom: '1rem',
                marginTop: '1rem'
              })}
            >
              {children}
            </blockquote>
          ),
          code: ({ children }) => (
            <code className={cx(chip(), css({ w: 'fit-content', color: 'secondary.70', display: 'inline' }))}>
              {children}
            </code>
          ),
          p: ({ children }) => {
            // children이 배열일 수도 있고 단일 요소일 수도 있음
            const hasCode = Array.isArray(children)
              ? children.some(child => isValidElement(child) && (child as ReactElement).props.node?.tagName === 'code')
              : isValidElement(children) && (children as ReactElement).props.node?.tagName === 'code'

            return (
              <p
                className={css({
                  marginBottom: hasCode ? '0.5rem' : undefined, // code가 있을 때만 더 큰 간격
                  display: hasCode ? 'flex' : undefined,
                  alignItems: hasCode ? 'center' : undefined,
                  gap: hasCode ? '0.5rem' : undefined,
                  marginTop: hasCode ? '0.5rem' : undefined
                })}
              >
                {children}
              </p>
            )
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default BlogContent
