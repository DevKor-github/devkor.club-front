import { css, cva } from '@styled-stytem/css'

import BeLogo from '@/assets/beLogo.svg'
import DeLogo from '@/assets/deLogo.svg'
import FeLogo from '@/assets/feLogo.svg'
import PmLogo from '@/assets/pmLogo.svg'
import { Track } from '@/types/track'

const iconImages: Record<Track, string> = {
  FE: FeLogo,
  BE: BeLogo,
  DE: DeLogo,
  PM: PmLogo
}

const iconStyles = cva({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60px',
    height: '60px',
    borderRadius: '9999px'
  },
  variants: {
    track: {
      FE: {
        bgColor: 'primary.70',
        padding: '16px 14px',
        boxShadow: '0px 0px 20px 0px rgba(255, 197, 19, 0.50)'
      },
      BE: {
        bgColor: 'label.80',
        padding: '14px 17px',
        boxShadow: '0px 0px 20px 0px rgba(193, 193, 193, 0.50)'
      },
      DE: {
        bgColor: 'secondary.70',
        padding: '13px',
        boxShadow: '0px 0px 20px 0px rgba(255, 153, 0, 0.50)'
      },
      PM: {
        bgColor: 'label.70',
        padding: '0 14px',
        boxShadow: '0px 0px 20px 0px rgba(138, 138, 141, 0.50)'
      }
    }
  }
})

interface CardProps {
  icons: Track[]
  children: React.ReactNode
}
const Card = ({ icons, children }: CardProps) => {
  return (
    <div
      className={css({
        width: { L: '400px', XS: 220 },
        height: '264px',
        borderRadius: '30px',
        boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.08)',
        backdropFilter: 'blur(5px)',
        py: '20px',
        px: { XS: 2 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px'
      })}
    >
      <div
        className={css({
          display: 'flex',
          gap: '10px'
        })}
      >
        {icons.map(track => (
          <div key={track} className={iconStyles({ track: track })}>
            <img src={iconImages[track]} alt={track} />
          </div>
        ))}
      </div>
      <p
        className={css({
          color: 'label.70',
          fontSize: { L: 20, XS: 16 },
          fontWeight: 400,
          wordBreak: 'keep-all',
          whiteSpace: 'pre-wrap',
          textAlign: { L: 'unset', XS: 'center' }
        })}
      >
        {children}
      </p>
    </div>
  )
}

export default Card
