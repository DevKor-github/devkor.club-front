import { Media } from '@/types/media'

export const handleCardSize = (mediaQuery: Media) => {
  if (mediaQuery.L) return '200px'
  if (mediaQuery.M) return '160px'
  if (mediaQuery.S) return '120px'
  return '60px'
}
export const handleImgSize = (mediaQuery: Media) => {
  if (mediaQuery.L) return '100px'
  if (mediaQuery.M) return '78px'
  if (mediaQuery.S) return '62px'
  return '32px'
}
