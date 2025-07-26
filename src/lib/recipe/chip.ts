import { defineRecipe } from '@pandacss/dev'

export const chipRecipe = defineRecipe({
  className: 'chip',
  description: 'Chip component',
  base: {
    p: '6px 10px',
    bg: 'label.98',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'label.70',
    fontSize: '0.875rem',
    fontWeight: '500',
    lineHeight: '100%'
  }
})
