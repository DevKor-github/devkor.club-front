import Spline from '@splinetool/react-spline'
import { motion, MotionValue, useTransform } from 'motion/react'

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
        zIndex: -1,
        zoom: 0.4,
        scale,
        willChange: 'transform',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden', // 성능 최적화
        perspective: 1000, // 3D 렌더링 최적화
        WebkitFontSmoothing: 'antialiased', // 텍스트 렌더링 개선,
        touchAction: 'none'
      }}
    >
      <Spline
        scene="https://prod.spline.design/DUh5k8bG5Vo5Xedl/scene.splinecode"
        style={{ width: '100%', height: '100%', contain: 'paint' }}
      />
    </motion.div>
  )
}

export default DevKorSplineM
