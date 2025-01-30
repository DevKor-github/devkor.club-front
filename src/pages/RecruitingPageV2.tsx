import { css } from '@styled-stytem/css'
import { AnimatePresence, useMotionValueEvent, useScroll } from 'motion/react'
import { useRef, useState } from 'react'

import Render from '@/common/components/Render'
import DevKorSpline from '@/components/recruit/DevKorSpline'
import DevKorSplineM from '@/components/recruit/DevKorSplineM'
import FAQSection from '@/components/recruit/FAQSection'
import FAQSpline from '@/components/recruit/FAQSpline'
import FAQSplineM from '@/components/recruit/FAQSplineM'
import RecruitIntro from '@/components/recruit/Intro'
import MobileScrollDownPointer from '@/components/recruit/MobileScrollDownPointer'
import RecruitSection2 from '@/components/recruit/Section2'
import RecruitSection3 from '@/components/recruit/Section3'
import RecruitSection4 from '@/components/recruit/Section4'
import { useMatchLayout } from '@/utils/useMatchLayout'

const RecruitingPageV2 = () => {
  const mediaQuery = useMatchLayout()
  const scrollRef = useRef<HTMLDivElement>(null)
  const { scrollY, scrollYProgress } = useScroll({ target: scrollRef })
  const [currentSection, setCurrentSection] = useState(0)

  const sectionHeight = window.innerHeight / 3

  useMotionValueEvent(scrollY, 'change', latest => {
    if (latest > sectionHeight * 3.1) {
      const sectionIndex = Math.floor((latest - sectionHeight * 3) / sectionHeight) + 1
      setCurrentSection(sectionIndex)
      return
    }
    setCurrentSection(0)

    if (latest < (scrollY.getPrevious() ?? 0) || mediaQuery.Mobile) return

    const snapThreshold = 0.3 // 30% 이상 스크롤 됐을 때 스냅

    for (let i = 1; i <= 3; i++) {
      const sectionStart = sectionHeight * (i - 1)
      const sectionEnd = sectionHeight * i
      const progress = (latest - sectionStart) / sectionHeight

      if (latest > sectionStart && latest < sectionEnd && progress > snapThreshold) {
        window.scrollTo({ top: sectionEnd, behavior: 'smooth' })
        break
      }
    }
  })

  return (
    <div
      ref={scrollRef}
      className={css({
        display: 'flex',
        flexDir: 'column',
        w: 'full',
        justifyContent: 'flex-start',
        alignItems: 'center',
        minHeight: '400vh',
        overflowY: 'scroll',
        pos: 'relative'
      })}
    >
      <div className={css({ w: 'full', h: `calc(100vh/3)` })} />
      <div className={css({ w: 'full', h: `calc(100vh/3)` })} />
      <div className={css({ w: 'full', h: `calc(100vh/3 + 100vh / 3 * 0.1)` })} />
      <AnimatePresence>
        <Render key="intro" condition={currentSection === 0}>
          <RecruitIntro key="intro" />
          <MobileScrollDownPointer />
        </Render>
        <Render key="section" condition={currentSection !== 0}>
          <RecruitSection2 key="section2" />
          <RecruitSection3 key="section3" />
          <RecruitSection4 key="section4" />
          {currentSection < 8 &&
            (mediaQuery.Mobile ? (
              <DevKorSplineM key="spline-mobile" scrollYProgress={scrollYProgress} />
            ) : (
              <DevKorSpline key="spline" scrollYProgress={scrollYProgress} />
            ))}
          <FAQSection key="faq" />
          {currentSection >= 8 &&
            (mediaQuery.Mobile ? <FAQSplineM key="faq-spline-mobile" /> : <FAQSpline key="faq-spline" />)}
        </Render>
      </AnimatePresence>
    </div>
  )
}

export default RecruitingPageV2
