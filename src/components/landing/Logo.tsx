import { cva } from '@styled-stytem/css'

import BeLogo from '@/assets/beLogo.svg'
import DeLogo from '@/assets/deLogo.svg'
import FeLogo from '@/assets/feLogo.svg'
import PmLogo from '@/assets/pmLogo.svg'
import { Track } from '@/types/track'

type LogoType = {
  [key: string]: string
}

const logos: LogoType = {
  FE: FeLogo,
  BE: BeLogo,
  DE: DeLogo,
  PM: PmLogo
}

interface LogoProps {
  track: Track
  defined: boolean
  imgWidth: string
}

const imgSize = cva({
  base: {
    L: { w: 100 },
    M: { w: '78px' },
    S: { w: '62px' },
    XS: { w: 8 }
  },
  variants: {
    size: {
      small: {
        w: { L: 8, M: 8, S: 8, XS: 7, XSDown: 7 }
      }
    }
  }
})
const Logo = ({ track, defined, imgWidth }: LogoProps) => {
  const LogoComponent = logos[track]

  if (!LogoComponent) return null

  return <img src={LogoComponent} alt={track} style={{ width: defined ? imgWidth : undefined }} className={imgSize()} />
}

export default Logo
