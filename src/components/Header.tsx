import { css, cx } from '@styled-stytem/css'
import { button } from '@styled-stytem/recipes'
import { motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'

import DeKorLogo from '@/assets/devkorLogo.svg'

const Header = () => {
  const navigate = useNavigate()

  const location = useLocation().pathname
  return (
    <header
      className={css({
        position: 'fixed',
        top: 0,
        w: 'full',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontWeight: 700,
        fontSize: { L: 18, XS: 13, XSDown: 13 },
        L: { px: 100, pt: 5, h: 69 },
        M: { px: '60px', pt: 3, h: 10 },
        S: { px: 8, pt: 33 },
        XS: { px: 5, pt: 19 },
        zIndex: 100,
        cursor: 'pointer'
      })}
    >
      <motion.nav
        // initial={{ opacity: 0 }}
        className={css({
          display: 'flex',
          w: 115,
          L: { h: 29 },
          M: { h: 17 },
          justifyContent: 'center',
          alignItems: 'flex-end',
          gap: 1,
          flexShrink: 0
        })}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, type: 'spring', stiffness: 120, damping: 20 }}
        onClick={() => navigate('/')}
      >
        <img src={DeKorLogo} alt="DevKor" className={css({ L: { w: 29 }, LDown: { w: 17 }, SDown: { w: 17 } })} />
        <p className={css({ fontFamily: 'montserrat', color: 'label.50' })}>DEVKOR</p>
      </motion.nav>
      {location === '/' && (
        <button
          className={cx(button({ variant: 'colored', size: { S: 'L', SDown: 'XS' } }))}
          onClick={() => navigate('/apply')}
        >
          지원하기
        </button>
      )}
    </header>
  )
}

export default Header
