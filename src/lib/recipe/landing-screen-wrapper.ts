import { defineRecipe } from '@pandacss/dev'

export const screenWrapperRecipe = defineRecipe({
  className: 'screenWrapper',
  description: 'A wrapper for the screen',
  base: {
    display: 'flex',
    w: 'full',
    h: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    L: { px: 100, pb: '47px' },
    M: { px: '60px', pb: '37px' },
    S: { px: 8, pt: 8 },
    XS: { px: 5, pt: '19px' }
  },
  variants: {
    position: {
      pos: { alignItems: { L: 'flex-end', M: 'flex-end', S: 'flex-start', XS: 'flex-start', XSDown: 'flex-start' } }
    }
  }
})
