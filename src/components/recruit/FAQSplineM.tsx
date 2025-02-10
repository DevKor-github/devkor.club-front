import { motion } from 'motion/react'

import RecruitAnimation from '@/assets/RecruitAnimation.webm'
const FAQSplineM = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed',
        bottom: 100,
        left: 0,
        touchAction: 'none',
        zIndex: -1,
        scale: 1,
        willChange: 'transform',
        transform: 'translateZ(0)'
      }}
    >
      <video id="FAQ-video" muted autoPlay playsInline>
        <source src={RecruitAnimation} type="video/webm" />
      </video>
    </motion.div>
  )
}

export default FAQSplineM
