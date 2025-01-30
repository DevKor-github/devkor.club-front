import { css, cx } from '@styled-stytem/css'
import { forwardRef } from 'react'

type SponsorChipProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const SponsorChip = forwardRef<HTMLButtonElement, SponsorChipProps>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cx(
        css({
          display: 'flex',
          px: 2.5,
          py: 1,
          alignItems: 'center',
          color: 'label.80',
          fontSize: { S: 16, XS: 10 },
          fontWeight: { S: 500, XS: 400 },
          rounded: 20,
          bgColor: 'label.BG',
          gap: 2,
          cursor: 'pointer'
        }),
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
})

export default SponsorChip
