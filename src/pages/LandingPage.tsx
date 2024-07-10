import Spline from '@splinetool/react-spline'
import { css, cva } from '@styled-stytem/css'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

import TrackCard from '@/components/landing/TrackCard'
import { useMatchLayout } from '@/utils/useMatchLayout'

//   const trackPosition = useSpring({
//     delay: 3000,
//     config: { tension: 120, friction: 20, duration: 400 }
//   })

const screenWrapper = cva({
  base: {
    display: 'flex',
    w: 'full',
    h: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    L: { px: 100, pb: '47px' },
    M: { px: '60px', pb: '37px', pt: 0 },
    S: { px: 8, pt: 8 },
    XS: { px: 5, pt: '19px' }
  }
  // variants: {
  //   position: {
  //     pos: { alignItems: { L: 'flex-end', M: 'flex-end', S: 'flex-start', XS: 'flex-start', XSDown: 'flex-start' } }
  //   }
  // }
})
const trackCardWrapper = cva({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    w: 'full',
    L: { gap: '60px' },
    M: { gap: '30px' },
    S: { gap: '20px' },
    XS: { gap: '10px' },
    XSDown: { gap: '10px' }
  },
  variants: {
    size: {
      small: {
        gap: { L: 5, M: 5, S: '30px', XS: '10px', XSDown: '10px' }
      }
    }
    // position: {
    //   pos: {
    //     justifyContent: { M: 'flex-end', S: 'center', XS: 'center', XSDown: 'center' }
    //   }
    // }
  }
})
const LandingPage = () => {
  const [alignItems, setAlignItems] = useState('center')
  const [justifyContent, setJustifyContent] = useState('center')

  const opacityValue = useMotionValue(0)
  const opacity = useSpring(opacityValue, { stiffness: 120, damping: 20, duration: 1.2 })
  const mediaQuery = useMatchLayout()
  const [show, setShow] = useState(false)
  const [defined, setDefined] = useState(false)
  useEffect(() => {
    setAlignItems(mediaQuery.M ? 'flex-end' : 'flex-start')
    setJustifyContent(mediaQuery.M ? 'flex-end' : 'center')
    const timer = setTimeout(() => {
      opacity.set(1)
    }, 3000)
    return () => clearTimeout(timer) // Clean up the timer on component unmount
  }, [opacity, mediaQuery])

  useEffect(() => void setTimeout(() => setShow(true), 3500), [])
  useEffect(() => void setTimeout(() => setDefined(true), 3000), [])

  const handleGap = () => {
    if (mediaQuery.M) return '20px'
    if (mediaQuery.S) return '30px'
    return '10px'
  }
  return (
    <motion.div
      className={screenWrapper()}
      transition={{ delay: 3, type: 'spring', stiffness: 120, damping: 20 }}
      style={{ alignItems: defined ? alignItems : 'center' }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        className={css({
          display: 'flex',
          pos: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
          w: 'full',
          h: { L: 728 },
          alignSelf: 'center',
          L: { px: 100 },
          M: { px: '60px' },
          S: { px: 8 },
          XS: { px: 5 },
          rounded: 40
        })}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, type: 'spring', stiffness: 120, damping: 20 }}
      >
        {/* {show && (
          <Spline
            scene="https://prod.spline.design/whnLKtVDGcOFe9uK/scene.splinecode"
            className={css({ rounded: 40 })}
          />
        )} */}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        className={css({
          display: 'flex',
          pos: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
          w: 'full',
          h: { L: 728, M: 530, S: 599, XS: 466, XSDown: 466 },
          alignSelf: 'center',
          L: { px: 100 },
          M: { px: '60px' },
          S: { px: 8 },
          XS: { px: 5 }
        })}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, type: 'spring', stiffness: 120, damping: 20 }}
      >
        <div
          className={css({ display: 'flex', flexDir: 'column', alignItems: 'center', gap: '15px', color: 'label.100' })}
        >
          <h1 className={css({ fontWeight: 700, fontSize: { L: 128, S: 90, XS: 40, XSDown: 40 } })}>DevKor</h1>
          <p
            className={css({
              textAlign: 'center',
              fontWeight: 400,
              fontSize: { L: 18, S: 16, XS: 14, XSDown: 14 },
              lineBreak: 'strict'
            })}
          >
            DevKor는 현실의 문제를 소프트웨어로 해결하고자 모인
            <br className={css({ display: { XSOnly: 'flex', S: 'none' } })} />
            고려대학교 소프트웨어 개발 학회입니다.
            <br />
            소프트웨어를 통해 문제를 해결하는 서비스를 출시하는 것에 목표를 두고 있습니다.
          </p>
        </div>
      </motion.div>
      <motion.div
        layout
        className={trackCardWrapper()}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        style={{ justifyContent: defined ? justifyContent : 'center', gap: defined ? handleGap() : undefined }}
      >
        <TrackCard track="FE" />
        <TrackCard track="BE" />
        <TrackCard track="DE" />
        <TrackCard track="PM" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        className={css({
          position: 'fixed',
          left: { L: 100, M: '60px', S: 8, XS: 5, XSDown: 5 },
          bottom: { L: 16, M: 55, S: 34, XS: 3, XSDown: 3 },
          fontSize: { L: 18, M: 16, S: 14, XS: 12, XSDown: 12 },
          fontWeight: 400,
          color: 'label.80'
        })}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, type: 'spring', stiffness: 120, damping: 20 }}
      >
        고려대학교 소프트웨어 서비스 학회 DevKor
      </motion.p>
    </motion.div>
  )
}
export default LandingPage
