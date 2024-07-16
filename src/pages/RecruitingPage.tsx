import { css, cx } from '@styled-stytem/css'
import { button } from '@styled-stytem/recipes'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import RecruiteImg from '@/assets/RecruiteImg.jpg'
import RecruiteLogo from '@/assets/RecruiteLogo.svg'
import ScrollDown from '@/assets/ScrollDown.svg'
const RecruitingPage = () => {
  const { scrollY } = useScroll()
  const x = useTransform(scrollY, [0, 200], [0, -1000])
  const x2 = useTransform(scrollY, [0, 200], [0, 1000])
  const targetRef = useRef(null)

  return (
    <div
      ref={targetRef}
      className={css({
        display: 'flex',
        // position: 'relative',
        flexDir: 'column',
        w: 'full',
        h: '300vh',
        justifyContent: 'center',
        alignItems: 'center',
        // px: '66px',
        // pb: 34,
        overflow: 'scroll'
      })}
    >
      <div
        className={css({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pos: 'fixed',
          w: 'full',
          px: 'calc((100% - 1307px)/2)',
          h: 842,
          zIndex: 10,
          top: '50%',
          transform: 'translateY(-50%)',
          overflow: 'auto'
        })}
      >
        <img
          src={RecruiteImg}
          alt="recruite img"
          // className={css({ pos: 'absolute', w: 'full', px: 'calc((100% - 1307px)/2)', h: 842, bottom: 34 })}
        />
        <motion.p
          initial={{ x: -3000, y: 0 }}
          className={css({
            pos: 'absolute',
            left: 'calc((100% - 1307px)/2 + 100px)',
            bottom: 255,
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
            pos: 'absolute',
            w: 819,
            bottom: 199,
            fontSize: 48,
            fontWeight: 300,
            color: 'label.100'
          })}
          animate={{ x: 0, y: 0 }}
          transition={{ delay: 1, type: 'spring', duration: 0.6, stiffness: 150, damping: 20, mass: 1 }}
          style={{ x: x2 }}
        >
          신입 부원 모집
        </motion.p>
        <motion.button
          initial={{ x: -1200 }}
          className={cx(
            button({ variant: 'colored', size: 'XL' }),
            css({ pos: 'absolute', bottom: 90, left: 'calc((100% - 1307px)/2)', fontSize: 24, fontWeight: 700 })
          )}
          animate={{ x: 0 }}
          transition={{ delay: 1.7, type: 'spring', stiffness: 100, damping: 10, mass: 0.5 }}
        >
          지원서 작성하기
        </motion.button>
        <img
          src={RecruiteLogo}
          alt="recruite logo"
          className={css({ pos: 'absolute', zIndex: 10, bottom: 0, right: 'calc((100% - 1307px)/2)' })}
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
    </div>
  )
}

export default RecruitingPage
