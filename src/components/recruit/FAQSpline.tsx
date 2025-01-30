import Spline from '@splinetool/react-spline'
import { motion } from 'motion/react'

const FAQSpline = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      key="spline"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        touchAction: 'none',
        zIndex: -1,
        x: '-20%',
        willChange: 'transform',
        transform: 'translateZ(0)'
      }}
    >
      <Spline scene="https://prod.spline.design/c5HakyEUKP0dVZBP/scene.splinecode" />
    </motion.div>
  )
}

export default FAQSpline
