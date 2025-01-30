import { css } from '@styled-stytem/css'
import { motion } from 'motion/react'

import Globe from '@/assets/globe.svg'
const ClickedIntro = () => {
  return (
    <motion.div
      initial={{ display: 'none' }}
      className={css({
        display: 'flex',
        flexDir: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: { S: 64, XS: 32, XSDown: 32 },
        fontWeight: 700,
        color: 'label.100'
      })}
      animate={{ display: 'flex' }}
      transition={{ delay: 1 }}
    >
      <motion.p
        initial={{ x: -1800, y: 0 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        Make a new piece
      </motion.p>
      <motion.div
        initial={{ x: 1800, y: 0 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 2, ease: [0.25, 0.1, 0.25, 1] }}
        className={css({ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5 })}
      >
        <p>of the world</p>
        <motion.img
          initial={{ x: 0, y: -2000 }}
          animate={{ x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 3, ease: [0.25, 0.1, 0.25, 1] }}
          src={Globe}
          alt="globe"
          className={css({ w: { S: '42px', XS: '24px' } })}
        />
        <p>with us</p>
      </motion.div>
    </motion.div>
  )
}

export default ClickedIntro
