import { css, cva } from '@styled-stytem/css'
import { motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import video from '@/assets/Landing.mp4'
import ClickedIntro from '@/components/landing/ClickedIntro'
import LandingIntro from '@/components/landing/LandingIntro'
import TrackCard from '@/components/landing/TrackCard'
import Button from '@/components/ui/button'
import { useMatchLayout } from '@/utils/useMatchLayout'

const screenWrapper = cva({
  base: {
    display: 'flex',
    w: 'full',
    h: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    L: { px: 100, pb: '47px' },
    M: { px: '60px', pb: '37px', pt: 0 },
    S: { px: 8, pt: 82 },
    XS: { px: 5, pt: '55px' }
  }
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
  }
})
const LandingPage = () => {
  const navigate = useNavigate()
  const [alignItems, setAlignItems] = useState('center')
  const [justifyContent, setJustifyContent] = useState('center')

  const mediaQuery = useMatchLayout()
  const [show, setShow] = useState(false)
  const [defined, setDefined] = useState(false)
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    setAlignItems(mediaQuery.M ? 'flex-end' : 'flex-start')
    setJustifyContent(mediaQuery.M ? 'flex-end' : 'center')
  }, [mediaQuery])
  useEffect(() => void setTimeout(() => setDefined(true), 3000), [])
  useEffect(() => void setTimeout(() => setShow(true), 3000), [])

  const handleGap = () => {
    if (mediaQuery.M) return '20px'
    if (mediaQuery.S) return '30px'
    return '10px'
  }

  const handleClick = useCallback(() => {
    setClicked(true)
    setTimeout(() => navigate('/recruit'), 5000)
  }, [navigate])

  const handleStyle = useCallback(() => {
    return clicked ? { padding: 0, height: '100vh', top: 0, bottom: 0 } : undefined
  }, [clicked])

  return (
    <motion.div
      className={screenWrapper()}
      transition={{ delay: 3, type: 'spring', stiffness: 120, damping: 20 }}
      style={{ alignItems: defined ? alignItems : 'center' }}
    >
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          className={css({
            display: 'flex',
            pos: 'fixed',
            flexDir: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            w: 'full',
            alignSelf: 'center',
            h: { XL: 1200, L: 728, M: 530, S: 687, XS: 533, XSDown: 533 },
            L: { px: 100 },
            M: { px: '60px' },
            S: { px: 8 },
            XS: { px: 5 },
            gap: { S: 11, XS: '23px', XSDown: '23px' },
            zIndex: 110,
            top: { M: 69, S: 158, XS: 129, XSDown: 129 },
            bottom: { L: 148, M: 119 }
          })}
          animate={{ opacity: 1, ...handleStyle() }}
          transition={{
            delay: 1.2,
            type: 'spring',
            stiffness: 120,
            damping: 20
          }}
        >
          <video
            id="landing-video"
            muted
            autoPlay
            loop
            playsInline
            className={css({ rounded: clicked ? 0 : '40px' })}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          >
            <source src={video} type="video/mp4" />
          </video>
          {!mediaQuery.M && (
            <Button variant="colored" size={mediaQuery.S ? 'L' : 'default'} onClick={handleClick}>
              지원하기
            </Button>
          )}
        </motion.div>
      )}
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          className={css({
            display: 'flex',
            pos: 'fixed',
            flexDir: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            w: 'full',
            alignSelf: 'center',
            h: { XL: 1200, L: 728, M: 530, S: 603, XS: 470, XSDown: 470 },
            L: { px: 100 },
            M: { px: '60px' },
            S: { px: 8 },
            XS: { px: 5 },
            gap: { S: 11, XS: '23px', XSDown: '23px' },
            zIndex: 110,
            top: { M: 69, S: 158, XS: 129, XSDown: 129 },
            bottom: { L: 148, M: 119 },
            rounded: 40
          })}
          animate={{ opacity: 1, ...handleStyle(), borderRadius: 0 }}
          transition={{
            delay: 1.2,
            type: 'spring',
            stiffness: 120,
            damping: 20
          }}
          // style={clicked ? { backgroundColor: 'rgba(255, 255, 255, 0.10)', backdropFilter: 'blur(20px)' } : undefined}
        >
          <motion.div
            className={css({
              w: 'full',
              h: 'full',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              rounded: 40
            })}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            style={
              clicked
                ? {
                    borderRadius: '40px',
                    backgroundColor: 'rgba(255, 255, 255, 0.10)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)'
                  }
                : undefined
            }
          >
            {<LandingIntro clicked={clicked} handleClick={handleClick} />}
            {clicked && <ClickedIntro />}
          </motion.div>
        </motion.div>
      )}
      <motion.div
        layout
        className={trackCardWrapper()}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        style={{
          justifyContent: defined ? justifyContent : 'center',
          gap: defined ? handleGap() : undefined
        }}
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
