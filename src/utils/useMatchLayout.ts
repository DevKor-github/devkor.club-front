import { useMediaQuery } from '@/utils/useMediaQuery'

const enum Layout {
  L = '1440px',
  M = '1024px',
  S = '768px',
  XS = '375px'
}
export const useMatchLayout = () => {
  const L = useMediaQuery(`(min-width: ${Layout.L})`)
  const M = useMediaQuery(`(min-width: ${Layout.M})`)
  const MOnly = useMediaQuery(`(min-width: ${Layout.M}) and (max-width: 79.9975rem)`)
  const S = useMediaQuery(`(min-width: ${Layout.S})`)
  const XS = useMediaQuery(`(min-width: ${Layout.XS})`)
  const XSDown = useMediaQuery(`(max-width: ${Layout.XS})`)
  return { L, M, MOnly, S, XS, XSDown }
}
