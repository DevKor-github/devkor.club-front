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
    S: { fontSize: 16, fontWeight: 600 },
    XS: { fontSize: 14, fontWeight: 600 },
    color: 'label.50',
    resize: 'none',
    overflow: 'auto',
    _placeholder: { color: 'label.80' }
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
