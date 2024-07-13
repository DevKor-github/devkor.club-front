import { css, cx } from '@styled-stytem/css'
import { button } from '@styled-stytem/recipes'
import { motion, useScroll, useTransform } from 'framer-motion'

import RecruiteImg from '@/assets/RecruiteImg.jpg'
import RecruiteLogo from '@/assets/RecruiteLogo.svg'
import ScrollDown from '@/assets/ScrollDown.svg'
const RecruitingPage = () => {
  const { scrollY } = useScroll()
  const x = useTransform(scrollY, [0, 500], [0, -100])

  return (
    <div
      className={css({
        display: 'flex',
        position: 'relative',
        w: 'full',
        h: 'full',
        justifyContent: 'center',
        alignItems: 'center',
        px: '66px',
        pb: 34
      })}
    >
      <img
        src={RecruiteImg}
        alt="recruite img"
        className={css({ pos: 'absolute', w: 'full', px: 66, h: 842, bottom: 34 })}
      />
      <motion.p
        initial={{ x: -3000, y: 0 }}
        className={css({
          pos: 'fixed',
          left: 100,
          bottom: 289,
          fontSize: 128,
          fontWeight: 700,
          color: 'label.100'
        })}
        animate={{ x: 0, y: 0 }}
        transition={{ delay: 0.3, type: 'spring', duration: 0.6, stiffness: 150, damping: 20, mass: 1 }}
        style={{ x }}
      >
        DevKor
      </motion.p>
      <motion.p
        initial={{ x: 3000, y: 0 }}
        className={css({
          pos: 'fixed',
          w: 819,
          bottom: 233,
          fontSize: 48,
          fontWeight: 300,
          color: 'label.100'
        })}
        animate={{ x: 0, y: 0 }}
        transition={{ delay: 1, type: 'spring', duration: 0.6, stiffness: 150, damping: 20, mass: 1 }}
      >
        신입 부원 모집
      </motion.p>
      <motion.button
        initial={{ x: -1200 }}
        className={cx(
          button({ variant: 'colored', size: 'XL' }),
          css({ pos: 'absolute', bottom: 124, left: 66, fontSize: 24, fontWeight: 700 })
        )}
        animate={{ x: 0 }}
        transition={{ delay: 1.7, type: 'spring', stiffness: 100, damping: 10, mass: 0.5 }}
      >
        지원서 작성하기
      </motion.button>
      <img
        src={RecruiteLogo}
        alt="recruite logo"
        className={css({ pos: 'absolute', zIndex: 10, bottom: 34, right: 66 })}
      />
      <motion.div
        initial={{ opacity: 0 }}
        className={css({
          display: 'flex',
          pos: 'absolute',
          flexDir: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'flex-end',
          gap: '7px',
          flexShrink: 0,
          mb: 27
        })}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 100, damping: 10, mass: 0.5 }}
      >
        <p className={css({ fontSize: 18, fontWeight: 700, color: 'label.100', opacity: 0.5 })}>Scroll Down</p>
        <motion.img
          src={ScrollDown}
          alt="scroll down"
          animate={{
            y: ['0%', '20%', '0%'],
            transition: {
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }
          }}
        />
      </motion.div>
    </div>
  )
}

export default RecruitingPage
