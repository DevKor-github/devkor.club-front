import { css } from '@styled-stytem/css'
import { motion } from 'motion/react'

import ScrollDown from '@/assets/ScrollDown.svg'

const MobileScrollDownPointer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      className={css({
        display: { M: 'none', XS: 'flex', XSDown: 'flex' },
        pos: 'fixed',
        flexDir: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '7px',
        flexShrink: 0,
        bottom: 0,
        mb: '3.125rem'
      })}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, type: 'spring', stiffness: 100, damping: 10, mass: 0.5 }}
    >
      <p className={css({ fontSize: 18, fontWeight: 700, color: 'label.80/80', opacity: 0.5 })}>Scroll Down</p>
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
        style={{ filter: 'brightness(0.8)' }}
      />
    </motion.div>
  )
}

export default MobileScrollDownPointer
