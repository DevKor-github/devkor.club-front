import { css } from '@styled-stytem/css'
import { HStack as StytemHStack, HstackProps as StytemHStackProps } from '@styled-stytem/jsx'

export type HstackProps = StytemHStackProps & {
  as?: keyof JSX.IntrinsicElements
}
export const HStack = ({ as: Comp, children, ...props }: HstackProps) => {
  if (!Comp) {
    return <StytemHStack {...props}>{children}</StytemHStack>
  }

  // CSS 관련 props만 필터링
  const cssProps = Object.fromEntries(
    Object.entries(props).filter(([, value]) => {
      return typeof value !== 'object' || value === null || Array.isArray(value)
    })
  )

  const styleClassName = css({ display: 'flex', flexDirection: 'row', ...cssProps })

  return <Comp className={styleClassName}>{children}</Comp>
}
