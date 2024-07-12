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
      outline: {
        bg: 'background',
        border: 'input',
        color: 'primary',
        _hover: { transition: 'background 0.25s', bg: 'accent', color: 'accent.foreground' }
      },
      ghost: {
        color: 'primary',
        _hover: { bg: 'accent', color: 'accent.foreground' }
      }
    },
    size: {
      default: { px: 10, py: '7px' },
      XL: { px: 10, py: 4, rounded: '50px' },
      L: { px: 20, py: '7px' },
      M: { px: 10, py: '5px' },
      lg: { h: 11, px: 8 },
      icon: { h: 10, w: 10 }
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
})
