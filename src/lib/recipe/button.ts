import { defineRecipe } from '@pandacss/dev'

export const buttonRecipe = defineRecipe({
  className: 'button',
  description: 'Button component',
  base: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    cursor: 'pointer',
    rounded: 24,
    color: 'label.100'
  },
  variants: {
    variant: {
      default: {
        bgColor: 'rgba(255,255,255,0.50)',
        boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.15)',
        backdropFilter: 'blur(10px)',
        _hover: { transition: 'background 0.3s ease-in-out', bgColor: 'rgba(255, 197, 19, 0.50)' }
      },
      colored: {
        bgColor: 'primary.70',
        _hover: { transition: 'background 0.3s ease-in-out', bgColor: 'rgba(255, 197, 19, 0.50)' }
      },
      gray: {
        bgColor: 'label.90',
        _hover: { transition: 'background 0.3s ease-in-out', bgColor: 'rgba(255, 197, 19, 0.50)' }
      },
      icon: {
        bgColor: 'label.80',
        _hover: { transition: 'background 0.3s ease-in-out', bgColor: 'label.90' }
      },
      iconActive: {
        border: '1.5px solid {colors.label.80}',
        color: 'label.80',
        _hover: { transition: 'background 0.3s ease-in-out', bgColor: 'label.BG' }
      }
    },
    size: {
      default: { px: 10, py: '7px' },
      XL: { px: 10, py: 5, rounded: '50px' },
      L: { px: 20, py: '7px' },
      M: { px: 10, py: '5px' },
      XS: { px: 5, py: 2.5 },
      lg: { h: 11, px: 8 },
      icon: { fontWeight: 600, fontSize: { L: 20, M: 18, S: 14 }, px: 5, py: '7px', gap: 1, M: { h: '50px' } }
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
})
