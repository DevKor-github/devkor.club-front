import { cx, type RecipeVariantProps } from '@styled-stytem/css'
import { chip } from '@styled-stytem/recipes'

type ChipProps = React.HTMLAttributes<HTMLDivElement> & RecipeVariantProps<typeof chip>

const Chip = ({ className, ...props }: ChipProps) => {
  return <div className={cx(chip(), className)} {...props}></div>
}

export default Chip
