import Spline from '@splinetool/react-spline'
import { motion, MotionValue, useTransform } from 'motion/react'

type Props = {
  scrollYProgress: MotionValue<number>
}
const DevKorSpline = ({ scrollYProgress }: Props) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2])
  const translateX = useTransform(scrollYProgress, [0, 1], ['0%', '-40%'])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      key="spline"
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '50%',
        height: '100vh',
        zIndex: -1,
        scale,
        translateX,
        touchAction: 'none'
      }}
    >
      <Spline
        scene="https://prod.spline.design/DUh5k8bG5Vo5Xedl/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
    </motion.div>
  )
}

export default DevKorSpline
