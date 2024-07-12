import { cva } from '@styled-stytem/css'
import { AnimationProps, motion, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

import Logo from '@/components/landing/Logo'
import { Track } from '@/types/track'
import { handleCardSize, handleImgSize } from '@/utils/getSizes'
import { useMatchLayout } from '@/utils/useMatchLayout'
const trackCard = cva({
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2.5,
    flexShrink: 0,
    L: { w: 200, h: 200 },
    M: { w: 160, h: 160 },
    S: { w: 120, h: 120 },
    XS: { w: '60px', h: '60px' },
    opacity: 0.5
  },
  variants: {
    track: {
      FE: {
        bgColor: 'primary.70'
      },
      BE: {
        bgColor: 'label.80'
      },
      DE: {
        bgColor: 'secondary.70'
      },
      PM: {
        bgColor: 'label.70'
      }
    },
    size: {
      small: {
        w: { L: '60px', M: '60px', S: '60px', XS: '50px', XSDown: '50px' },
        h: { L: '60px', M: '60px', S: '60px', XS: '50px', XSDown: '50px' }
      }
    }
  }
})

const cardGrid = {
  FE: { x: -805, y: -400 },
  BE: { x: -298, y: 1089 },
  DE: { x: 1596, y: 1024 },
  PM: { x: 1450, y: -756 }
}
interface PositionCardProps {
  track: Track
}

const spring: AnimationProps['transition'] = {
  type: 'spring',
  stiffness: 30,
  damping: 4,
  mass: 1,
  duration: 3
}

const TrackCard = ({ track }: PositionCardProps) => {
  const [transitionConfig, setTransitionConfig] = useState<AnimationProps['transition']>(spring)

  const mediaQuery = useMatchLayout()
  const [width, setWidth] = useState(handleCardSize(mediaQuery))
  const [imgWidth, setImgWidth] = useState(handleImgSize(mediaQuery))
  const [defined, setDefined] = useState(false)
  const opacity = useSpring(0.5, { stiffness: 30, damping: 4, mass: 1, duration: 3 })

  useEffect(() => {
    setTimeout(() => {
      opacity.set(1)
      setWidth(mediaQuery.M ? '60px' : '50px')
      setImgWidth(mediaQuery.S ? '32px' : '28px')
    }, 3000)
  }, [opacity, mediaQuery])

  useEffect(
    () =>
      void setTimeout(() => {
        setTransitionConfig(undefined)
        setDefined(true)
      }, 3000),
    []
  )

  const handleBorderRadius = () => {
    if (defined) return '45px'
    return mediaQuery.S ? '30px' : '10px'
  }

  return (
    <motion.div
      layout
      initial={{ x: cardGrid[track].x, y: cardGrid[track].y }}
      className={trackCard({ track })}
      animate={{ x: 0, y: 0 }}
      style={{
        opacity,
        width: defined ? width : undefined,
        height: defined ? width : undefined,
        borderRadius: handleBorderRadius()
      }}
      transition={transitionConfig}
    >
      <Logo track={track} defined={defined} imgWidth={imgWidth} />
    </motion.div>
  )
}

export default TrackCard
