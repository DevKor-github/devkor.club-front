import { css } from '@styled-stytem/css'
import { motion } from 'motion/react'
import { useCallback, useEffect, useState } from 'react'

import Calendar25_1 from '@/assets/Calendar25-1.png'
import Direction from '@/assets/Direction.svg'
import DirectionXS from '@/assets/DirectionXS.svg'
import Worm from '@/assets/Worm.svg'
import WormXS from '@/assets/WormXS.svg'
import { useMatchLayout } from '@/utils/useMatchLayout'
const RecruitSection3 = () => {
  const mediaQuery = useMatchLayout()
  const handleCalendarMediaQuery = useCallback(() => {
    if (mediaQuery.L) return Calendar25_1
    if (mediaQuery.S) return Calendar25_1
    return Calendar25_1
  }, [mediaQuery])

  const [calendarSrc, setCalendarSrc] = useState(handleCalendarMediaQuery)
  useEffect(() => setCalendarSrc(handleCalendarMediaQuery()), [mediaQuery, handleCalendarMediaQuery])
  return (
    <section
      key="section3"
      className={css({
        width: '100%',
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '60px',
        h: '100vh'
      })}
    >
      <motion.div
        className={css({
          display: 'flex',
          gap: 16,
          width: 'max-content',
          willChange: 'transform',
          transform: 'translateZ(0)',
          position: 'relative'
        })}
        animate={{
          x: [0, '-25%'],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 5,
              ease: 'linear',
              useTransform: true
            }
          }
        }}
      >
        <MarqueeItem />
        <MarqueeItem />
        <MarqueeItem />
        <MarqueeItem />
      </motion.div>
      <div
        className={css({
          p: '32px',
          w: 'full',
          maxWidth: 'calc(1240px + 64px)'
        })}
      >
        <img src={calendarSrc} alt="모집공고 일정 캘린더" className={css({ w: { L: 842, M: 404 } })} />
      </div>
    </section>
  )
}

const MarqueeItem = () => {
  const mediaQuery = useMatchLayout()
  const [svg, setSvg] = useState(mediaQuery.S ? 'normal' : 'small')
  useEffect(() => {
    setSvg(mediaQuery.S ? 'normal' : 'small')
  }, [mediaQuery])
  return (
    <div
      className={css({
        display: 'flex',
        gap: { S: 16, XS: 10 },
        fontSize: { S: 96, XS: 56 },
        color: 'label.80',
        fontWeight: 700,
        width: 'max-content'
      })}
    >
      <p>Join us</p>
      <img src={svg === 'normal' ? Direction : DirectionXS} alt="" />
      <p>on our journey</p>
      <img src={svg === 'normal' ? Worm : WormXS} alt="" />
    </div>
  )
}

export default RecruitSection3
