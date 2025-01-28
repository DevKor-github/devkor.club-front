import Spline from '@splinetool/react-spline'
import { motion, MotionValue, useTransform } from 'framer-motion'

type Props = {
  scrollYProgress: MotionValue<number>
}
const DevKorSplineM = ({ scrollYProgress }: Props) => {
  const scale = useTransform(scrollYProgress, [0, 2], [1, 4])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      key="spline"
      style={{
        position: 'fixed',
        top: '30%',
        left: '10%',
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1,
        zoom: 0.4,
        scale
      }}
    >
      <Spline scene="https://prod.spline.design/DUh5k8bG5Vo5Xedl/scene.splinecode" />
    </motion.div>
  )
}

export default DevKorSplineM
