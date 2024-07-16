import { css, cx } from '@styled-stytem/css'
import { button } from '@styled-stytem/recipes'
import { easeInOut, motion, useMotionTemplate, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'

import Direction from '@/assets/Direction.svg'
import RecruitImg from '@/assets/RecruitImg.png'
import RecruitImgL from '@/assets/RecruitImgL.png'
import RecruitImgM from '@/assets/RecruitImgM.png'
import RecruitImgXS from '@/assets/RecruitImgXS.png'
import RecruiteLogo from '@/assets/RecruitLogo.svg'
import ScrollDown from '@/assets/ScrollDown.svg'
import Worm from '@/assets/Worm.svg'
import Button from '@/components/ui/button'
import { useMatchLayout } from '@/utils/useMatchLayout'
const RecruitingPage = () => {
  const { scrollY } = useScroll()
  const x = useTransform(scrollY, [0, 200], [0, -1000], { ease: easeInOut })
  const x2 = useTransform(scrollY, [0, 200], [0, 1000], { ease: easeInOut })
  const x3 = useTransform(scrollY, [0, 200], [-1000, 0], { ease: easeInOut })
  const x4 = useTransform(scrollY, [250, 350], [2000, 0], { ease: easeInOut })
  const x5 = useTransform(scrollY, [400, 450], [-2000, 0], { ease: easeInOut })
  const i = useTransform(scrollY, [100, 250], [1, 0.6], { ease: easeInOut })
  const filter = useMotionTemplate`brightness(${i})`
  const [phase, setPhase] = useState(false)
  useMotionValueEvent(scrollY, 'change', latest => setPhase(latest > 600 ? true : false))

  const mediaQuery = useMatchLayout()

  const handleImgMediaQuery = useCallback(() => {
    if (mediaQuery.L) return RecruitImg
    if (mediaQuery.M) return RecruitImgL
    if (mediaQuery.S) return RecruitImgM
    return RecruitImgXS
  }, [mediaQuery])
  const [src, setSrc] = useState(handleImgMediaQuery)

  useEffect(() => {
    fn()
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
    function fn() {
      setSrc(handleImgMediaQuery())
    }
  }, [mediaQuery, handleImgMediaQuery])
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        w: 'full',
        h: 'calc(300vh)',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'scroll'
      })}
    >
      <div
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
        style={{ position: phase ? 'absolute' : 'fixed' }}
      >
        <motion.img
          src={src}
          alt="recruit img"
          className={css({ w: { L: 'full', M: '952px', S: '705px', XS: '335px', XSDown: '335px' } })}
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
              SDown: {
                whiteSpace: 'pre-wrap'
              }
            })}
            style={{ x: x3 }}
          >
            우리는 SW 기반 서비스에서{'\n'}기획, 개발, 디자인이 분리되어있다고 생각하지 않습니다.
          </motion.p>
          <motion.p
            className={css({
              fontSize: { M: 20, S: 16, SDown: 12 },
              fontWeight: { M: 700, S: 600 },
              color: 'label.100',
              textAlign: 'center',
              MDown: {
                whiteSpace: 'pre-wrap'
              }
            })}
            style={{ x: x4 }}
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
              MDown: {
                whiteSpace: 'pre-wrap'
              }
            })}
            style={{ x: x5 }}
          >
            세가지 관점을 합쳐 기술적으로 문제를 해결하고, 시장의 수요가 있으며,{'\n'}
            유저 경험이 좋은 프로덕트를 함께 만들어 사용자를 확보하는 경험을 하려 합니다.
          </motion.p>
        </div>
        <motion.p
          initial={{ x: -3000, y: 0 }}
          className={css({
            pos: 'absolute',
            left: { L: 'calc((100% - 1307px)/2 + 100px)', S: 47, SDown: 37 },
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
              bottom: { L: 94, M: 78, S: 24, SDown: 49 },
              left: { M: '24px', S: 8, SDown: 21 },
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
            right: '24px',
            LDown: { w: 132, h: 128 },
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
        style={{ display: phase ? 'flex' : 'none' }}
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
      <section>
        <motion.div
          className={css({
            display: 'flex',
            gap: 16
          })}
          animate={{
            x: [0, '-20%'],
            transition: {
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 5,
                ease: 'linear'
              }
            }
          }}
        >
          <MarqueeItem />
          <MarqueeItem />
          <MarqueeItem />
          <MarqueeItem />
          <MarqueeItem />
        </motion.div>
        <div>대충 캘린더</div>
      </section>
      <section>
        <p>이런 분들과 함께하고 싶습니다.</p>
        <div>
          <div>기능을 잘 만드는 개발자보다 코드 레벨에서의 최적화와 다양한 트러블 슈팅을 경험해본 개발자</div>
          <div>보기 좋은 UI에 머물기 보다 더 나아가 유저 경험이 좋은 화면을 설계하는 디자이너</div>
          <div>
            아이디어를 잘내는 기획자보다, 구체적인 근거를 바탕으로 어떤 아이템이 시장에 수요가 있을지 생각하고, User
            flow를 기획하는 기획자
          </div>
        </div>
      </section>
      <section>
        <p>DevKor의 활동</p>
        <div>
          <div>기능을 잘 만드는 개발자보다 코드 레벨에서의 최적화와 다양한 트러블 슈팅을 경험해본 개발자</div>
          <div>보기 좋은 UI에 머물기 보다 더 나아가 유저 경험이 좋은 화면을 설계하는 디자이너</div>
          <div>
            아이디어를 잘내는 기획자보다, 구체적인 근거를 바탕으로 어떤 아이템이 시장에 수요가 있을지 생각하고, User
            flow를 기획하는 기획자
          </div>
        </div>
      </section>
      <section>
        <p>파트 소개</p>
        <div>
          <div>Front-End</div>
          <div>Back-End</div>
        </div>
        <div>
          <div>Designer</div>
          <div>Project Manager</div>
        </div>
      </section>
    </div>
  )
}

const MarqueeItem = () => {
  return (
    <div
      className={css({
        display: 'flex',
        gap: 16,
        fontSize: '96px',
        color: 'label.80',
        fontWeight: 700,
        width: 'max-content'
      })}
    >
      <p>Join us</p>
      <img src={Direction} alt="" />
      <p>on our journey</p>
      <img src={Worm} alt="" />
    </div>
  )
}

export default RecruitingPage
