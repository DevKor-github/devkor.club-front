import { css, cx } from '@styled-stytem/css'
import { button } from '@styled-stytem/recipes'
import { easeInOut, motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import RecruitImg from '@/assets/RecruitImg.png'
import RecruitImgL from '@/assets/RecruitImgL.png'
import RecruitImgM from '@/assets/RecruitImgM.png'
import RecruitImgXS from '@/assets/RecruitImgXS.png'
import RecruitLogo from '@/assets/RecruitLogo.svg'
import ScrollDown from '@/assets/ScrollDown.svg'
import { useMatchLayout } from '@/utils/useMatchLayout'

const RecruitIntro = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll({
    target: scrollRef,
    layoutEffect: false,
    smooth: 16
  })
  const mediaQuery = useMatchLayout()

  const sectionHeight = useMemo(() => window.innerHeight / 3, [])

  const handleImgMediaQuery = useCallback(() => {
    if (mediaQuery.L) return RecruitImg
    if (mediaQuery.M) return RecruitImgL
    if (mediaQuery.S) return RecruitImgM
    return RecruitImgXS
  }, [mediaQuery])

  const animationDefaultConfig = {
    ease: easeInOut,
    clamp: true,
    restSpeed: 0.01,
    restDelta: 0.01
  }

  const [src, setSrc] = useState(handleImgMediaQuery)
  const i = useTransform(scrollY, [100, 250], [1, 0.6], animationDefaultConfig)
  const filter = useMotionTemplate`brightness(${i})`

  const text1X = useTransform(scrollY, [0, sectionHeight], [-1000, 0], animationDefaultConfig)

  const text2X = useTransform(scrollY, [sectionHeight, sectionHeight * 2], [1500, 0], animationDefaultConfig)

  const text3X = useTransform(scrollY, [sectionHeight * 2, sectionHeight * 3], [-1500, 0], animationDefaultConfig)

  const titleX = useTransform(scrollY, [0, sectionHeight], [0, -3000], animationDefaultConfig)
  const subtitleX = useTransform(scrollY, [0, sectionHeight], [0, 3000], animationDefaultConfig)

  useEffect(() => {
    fn()
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
    function fn() {
      setSrc(handleImgMediaQuery())
    }
  }, [mediaQuery, handleImgMediaQuery])

  return (
    <motion.div
      key="intro"
      ref={scrollRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        willChange: 'transform'
      }}
      className={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        pos: 'fixed',
        w: { L: 'full', M: 'calc(1024px - 24px)' },
        maxWidth: 'calc(1307px + 24px)',
        px: '24px',
        h: { L: 842, M: 613, S: 768, SDown: 482 },
        zIndex: 10,
        top: '50%',
        mt: '20px',
        transform: 'translateY(-50%)',
        wordBreak: 'keep-all'
      })}
    >
      <motion.img
        src={src}
        alt="recruit img"
        className={css({
          w: {
            L: 'full',
            M: '952px',
            S: '705px',
            XS: '335px',
            XSDown: '335px'
          },
          willChange: 'filter'
        })}
        style={{ filter }}
      />
      <div
        className={css({
          pos: 'absolute',
          top: '50%',
          left: 0,
          width: 'full',
          transform: 'translate(0, -50%)',
          px: '48px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        })}
      >
        <motion.p
          className={css({
            fontSize: { M: 20, S: 16, SDown: 12 },
            fontWeight: { M: 700, S: 600 },
            color: 'label.100',
            textAlign: 'center',
            SDown: { whiteSpace: 'pre-wrap' },
            willChange: 'transform'
          })}
          style={{ x: text1X }}
        >
          우리는 SW 기반 서비스에서{'\n'}기획, 개발, 디자인이 분리되어있다고 생각하지 않습니다.
        </motion.p>

        <motion.p
          className={css({
            fontSize: { M: 20, S: 16, SDown: 12 },
            fontWeight: { M: 700, S: 600 },
            color: 'label.100',
            textAlign: 'center',
            MDown: { whiteSpace: 'pre-wrap' },
            willChange: 'transform'
          })}
          style={{ x: text2X }}
        >
          개발자, 디자이너, 기획자가 한 팀이 되어 기획부터 개발, 운영까지 일련의 프로세스를 함께하며{'\n'}
          유저 확보가 가능한 프로덕트를 만들고자 합니다.
        </motion.p>

        <motion.p
          className={css({
            fontSize: { M: 20, S: 16, SDown: 12 },
            fontWeight: { M: 700, S: 600 },
            color: 'label.100',
            textAlign: 'center',
            MDown: { whiteSpace: 'pre-wrap' },
            willChange: 'transform'
          })}
          style={{ x: text3X }}
        >
          세가지 관점을 합쳐 기술적으로 문제를 해결하고, 시장의 수요가 있으며,{'\n'}
          유저 경험이 좋은 프로덕트를 함께 만들어 사용자를 확보하는 경험을 하려 합니다.
        </motion.p>
      </div>
      <motion.p
        // initial={{ x: -3000, y: 0 }}
        className={css({
          pos: 'absolute',
          left: { L: 'calc((100% - 1307px)/2 + 100px)', S: 47, SDown: 37 },
          bottom: { M: 255, S: 228, SDown: 174 },
          fontSize: { M: 128, S: 96, SDown: 56 },
          fontWeight: 700,
          color: 'label.100',
          willChange: 'transform'
        })}
        animate={{ x: 0, y: 0 }}
        transition={{ delay: 0.3, type: 'spring', duration: 0.6, stiffness: 150, damping: 20, mass: 1, repeat: 0 }}
        style={{ x: titleX }}
      >
        DevKor
      </motion.p>
      <motion.p
        // initial={{ x: 3000, y: 0 }}
        className={css({
          pos: 'absolute',
          left: { M: 'calc((100% - 1307px)/2 + 310px)', S: 47, SDown: 37 },
          bottom: { M: 199, S: 206, SDown: 132 },
          fontSize: { M: 48, MDown: 32 },
          fontWeight: 300,
          color: 'label.100',
          willChange: 'transform'
        })}
        animate={{ x: 0, y: 0 }}
        transition={{ delay: 1, type: 'spring', duration: 0.6, stiffness: 150, damping: 20, mass: 1 }}
        style={{ x: subtitleX }}
      >
        신입 부원 모집
      </motion.p>
      <motion.button
        // initial={{ x: -1200 }}
        className={cx(
          button({ variant: 'colored', size: { S: 'XL', SDown: 'XS' } }),
          css({
            pos: 'absolute',
            bottom: { L: 94, M: 78, S: 24, XS: 49, XSDown: 49 },
            left: { M: '24px', S: 8, SDown: 23 },
            fontSize: { S: 24, SDown: 16 },
            fontWeight: 700,
            willChange: 'transform'
          })
        )}
        animate={{ x: 0 }}
        transition={{ delay: 1.7, type: 'spring', stiffness: 100, damping: 10, mass: 0.5 }}
      >
        지원서 작성하기
      </motion.button>
      <img
        src={RecruitLogo}
        alt="recruite logo"
        className={css({
          pos: 'absolute',
          zIndex: 10,
          bottom: 0,
          right: '24px',
          LDown: { w: 132, h: 128 },
          SDown: { w: 110, h: 107 }
        })}
      />
      <motion.div
        initial={{ opacity: 0 }}
        className={css({
          display: { XS: 'flex', XSOnly: 'none', XSDown: 'none' },
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
    </motion.div>
  )
}

export default RecruitIntro
