import { cx, type RecipeVariantProps } from '@styled-stytem/css'
import { button } from '@styled-stytem/recipes'
import { forwardRef } from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & RecipeVariantProps<typeof button>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant, size, className, ...props }, ref) => {
  return <button ref={ref} className={cx(button({ variant, size }), className)} {...props}></button>
})
export default Button
