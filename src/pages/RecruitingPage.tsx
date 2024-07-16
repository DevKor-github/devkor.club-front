import { css, cx } from '@styled-stytem/css'
import { button } from '@styled-stytem/recipes'
import { easeInOut, motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'

import RecruitImg from '@/assets/RecruitImg.jpg'
import RecruitImgM from '@/assets/RecruitImgM.jpg'
import RecruitImgOpacity from '@/assets/RecruitImgOpacity.jpg'
import RecruitImgOpacityM from '@/assets/RecruitImgOpacityM.jpg'
import RecruitImgOpacityXS from '@/assets/RecruitImgOpacityXS.jpg'
import RecruitImgXS from '@/assets/RecruitImgXS.jpg'
import RecruiteLogo from '@/assets/RecruitLogo.svg'
import ScrollDown from '@/assets/ScrollDown.svg'
import Button from '@/components/ui/button'
import { useMatchLayout } from '@/utils/useMatchLayout'
const RecruitingPage = () => {
  const { scrollY } = useScroll()
  const x = useTransform(scrollY, [0, 200], [0, -1000], { ease: easeInOut })
  const x2 = useTransform(scrollY, [0, 200], [0, 1000], { ease: easeInOut })
  const x3 = useTransform(scrollY, [0, 200], [-1000, 0], { ease: easeInOut })
  const x4 = useTransform(scrollY, [250, 350], [2000, 0], { ease: easeInOut })
  const x5 = useTransform(scrollY, [400, 450], [-2000, 0], { ease: easeInOut })
  const [disapear, setDisapear] = useState(false)

  const mediaQuery = useMatchLayout()
  const handleImgMediaQuery = useMemo(() => {
    if (mediaQuery.M) return window.scrollY > 200 ? RecruitImgOpacity : RecruitImg
    if (mediaQuery.S) return window.scrollY > 200 ? RecruitImgOpacityM : RecruitImgM
    return window.scrollY > 200 ? RecruitImgOpacityXS : RecruitImgXS
  }, [mediaQuery])

  const [src, setSrc] = useState(handleImgMediaQuery)

  useEffect(() => setSrc(handleImgMediaQuery), [mediaQuery, handleImgMediaQuery])

  useEffect(() => {
    const handleOpacityImg = () => {
      if (mediaQuery.M) return window.scrollY > 200 ? RecruitImgOpacity : RecruitImg
      if (mediaQuery.S) return window.scrollY > 200 ? RecruitImgOpacityM : RecruitImgM
      return window.scrollY > 200 ? RecruitImgOpacityXS : RecruitImgXS
    }
    window.addEventListener('scroll', () => setSrc(handleOpacityImg))
    return () => window.removeEventListener('scroll', () => setSrc(handleOpacityImg))
  }, [mediaQuery])

  useEffect(() => {
    window.addEventListener('scroll', () => (window.scrollY > 600 ? setDisapear(true) : setDisapear(false)))
  }, [])
  return (
    <div
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
          w: 'full',
          px: 'calc((100% - 1307px)/2)',
          h: { M: 842, S: 768, SDown: 482 },
          zIndex: 10,
          top: '50%',
          mt: '20px',
          transform: 'translateY(-50%)'
          // overflow: 'auto',
        })}
        style={{ position: disapear ? 'absolute' : 'fixed' }}
      >
        <img
          src={src}
          alt="recruite img"
          className={css({ w: { M: 'full', S: '705px', XS: '335px', XSDown: '335px' } })}
          style={{ filter: '(rgba(0,0,0,0.6))' }}
        />
        <motion.p
          // initial={{ x: -3000, y: 0 }}
          className={css({
            pos: 'absolute',
            top: { M: 361, MDown: 270, SDown: 130 },
            fontSize: { M: 20, S: 16, SDown: 12 },
            fontWeight: { M: 700, S: 600 },
            color: 'label.100',
            textAlign: 'center'
          })}
          style={{ x: x3 }}
        >
          우리는 SW 기반 서비스에서
          <br className={css({ display: { S: 'none', XSDown: 'flex' } })} />
          기획, 개발, 디자인이 분리되어있다고 생각하지 않습니다.
        </motion.p>
        <motion.p
          className={css({
            pos: 'absolute',
            top: { M: 407, MDown: 314, SDown: 180 },
            fontSize: { M: 20, S: 16, SDown: 12 },
            fontWeight: { M: 700, S: 600 },
            color: 'label.100',
            textAlign: 'center'
          })}
          style={{ x: x4 }}
        >
          개발자, 디자이너, 기획자가 한 팀이 되어 기획부터 개발,{' '}
          <br className={css({ display: { S: 'none', XSDown: 'flex' } })} />
          운영까지 일련의 프로세스를 함께하며
          <br className={css({ display: { M: 'none', SDown: 'flex' } })} />
          유저 확보가 가능한 프로덕트를 만들고자 합니다.
        </motion.p>
        <motion.p
          className={css({
            pos: 'absolute',
            top: { M: 454, MDown: 382, SDown: 250 },
            fontSize: { M: 20, S: 16, SDown: 12 },
            fontWeight: { M: 700, S: 600 },
            color: 'label.100',
            textAlign: 'center'
          })}
          style={{ x: x5 }}
        >
          세가지 관점을 합쳐 기술적으로 문제를 해결하고,
          <br className={css({ display: { S: 'none', XSDown: 'flex' } })} />
          시장의 수요가 있으며,
          <br className={css({ display: { M: 'none', SDown: 'flex' } })} />
          유저 경험이 좋은 프로덕트를 함께 만들어 <br className={css({ display: { S: 'none', XSDown: 'flex' } })} />
          사용자를 확보하는 경험을 하려 합니다.
        </motion.p>
        <motion.p
          initial={{ x: -3000, y: 0 }}
          className={css({
            pos: 'absolute',
            left: { M: 'calc((100% - 1307px)/2 + 100px)', S: 47, SDown: 37 },
            bottom: { M: 255, S: 228, SDown: 174 },
            fontSize: { M: 128, S: 96, SDown: 56 },
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
            // w: 819,
            left: { M: 'calc((100% - 1307px)/2 + 310px)', S: 47, SDown: 37 },
            bottom: { M: 199, S: 206, SDown: 132 },
            fontSize: { M: 48, MDown: 32 },
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
            button({ variant: 'colored', size: { S: 'XL', SDown: 'XS' } }),
            css({
              pos: 'absolute',
              bottom: { M: 90, S: 24, SDown: 49 },
              left: { M: 'calc((100% - 1307px)/2)', S: 8, SDown: 21 },
              fontSize: { S: 24, SDown: 16 },
              fontWeight: 700
            })
          )}
          animate={{ x: 0 }}
          transition={{ delay: 1.7, type: 'spring', stiffness: 100, damping: 10, mass: 0.5 }}
        >
          지원서 작성하기
        </motion.button>
        <img
          src={RecruiteLogo}
          alt="recruite logo"
          className={css({
            pos: 'absolute',
            zIndex: 10,
            bottom: 0,
            right: { M: 'calc((100% - 1307px)/2)', S: 31, SDown: 4 },
            SDown: { w: 110, h: 107 }
          })}
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
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          w: 'full',
          gap: 7,
          justifyContent: 'center',
          alignItems: 'flex-start',
          // h: '342',
          px: 101
        })}
        style={{ display: !disapear ? 'none' : 'flex' }}
      >
        <h1 className={css({ fontSize: 64, fontWeight: 700, color: 'label.50' })}>
          DevKor <br />
          신입 부원 모집
        </h1>
        <p className={css({ fontSize: 20, fontWeight: 400, color: 'label.70' })}>
          디자이너, 개발자, 기획자의 협업을 통해 <br />
          유저 경험을 더욱 중시하는 서비스를 출시 하고자 합니다. <br />
          모든 포지션이 프로젝트의 기획부터 개발 및 디자인, 운영까지 모든 과정에 참여합니다.
        </p>
        <Button variant="colored">지원서 작성하기</Button>
      </div>
    </div>
  )
}

export default RecruitingPage
