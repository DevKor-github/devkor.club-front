import { defineRecipe } from '@pandacss/dev'

export const textareaRecipe = defineRecipe({
  className: 'input',
  description: 'Input Recipe',
  base: {
    display: 'flex',
    w: 'full',
    maxW: 820,
    h: 53,
    px: 4,
    py: '13px',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    rounded: 30,
    border: '1.5px solid {colors.label.98}',
    bgColor: 'label.BG',
    _focus: { border: '1.5px solid {colors.primary.70}', outline: 'none' },
    fontSize: 18,
    fontWeight: 400,
    color: 'label.50',
    resize: 'none',
    overflow: 'auto'
  },
  variants: {
    variant: {
      warning: {
        bgColor: 'rgba(219, 134, 127, 0.10)',
        border: '1.5px solid {colors.warning}',
        _focus: { border: '1.5px solid {colors.warning}', outline: 'none' }
      }
    }
  }
})
