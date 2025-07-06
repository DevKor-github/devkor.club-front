import { css } from '@styled-stytem/css'
import { HStack } from '@styled-stytem/jsx'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

import DeKorLogo from '@/assets/devkorLogo.svg'
import Button from '@/components/ui/button'

const Header = () => {
  const navigate = useNavigate()

  const location = useLocation().pathname

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={css({
        pos: 'fixed',
        h: { S: '4.5rem', SDown: '3.6875rem' },
        top: 0,
        w: 'full',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontWeight: 700,
        fontSize: { L: 18, XS: 13, XSDown: 13 },
        bg: 'white',
        L: { px: 'calc(50% - 519px)' }, // 원래는 100이었음
        M: { px: '60px' },
        S: { px: 8 },
        XS: { px: 5 },
        zIndex: 100,
        borderBottom: scrolled ? '1px solid #E0E0E0' : 'none',
        transition: 'border-bottom 0.2s ease-in-out'
      })}
    >
      <motion.nav
        className={css({
          display: 'flex',
          w: 115,
          L: { h: 29 },
          M: { h: 17 },
          justifyContent: 'center',
          alignItems: 'flex-end',
          gap: 1,
          flexShrink: 0,
          cursor: 'pointer'
        })}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, type: 'spring', stiffness: 120, damping: 20 }}
        onClick={() => navigate('/')}
      >
        <img src={DeKorLogo} alt="DevKor" className={css({ L: { w: 29 }, LDown: { w: 17 }, SDown: { w: 17 } })} />
        <p className={css({ fontFamily: 'montserrat', color: 'label.50' })}>DEVKOR</p>
      </motion.nav>
      <HStack gap={{ S: 10, SDown: 3 }} flexShrink={0}>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            css({
              color: isActive ? 'primary.70' : 'label.70',
              fontSize: { S: 18, SDown: 13 },
              fontWeight: 600,
              _hover: { color: 'primary.70' },
              transition: 'color 0.3s ease-in-out'
            })
          }
        >
          블로그
        </NavLink>

        <AnimatePresence>
          {location !== '/apply' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              <Button variant="colored" size="L1" onClick={() => navigate('/apply')}>
                <p
                  className={css({
                    fontSize: { S: 17, SDown: 13 },
                    fontWeight: 600,
                    color: 'white',
                    lineHeight: '120%'
                  })}
                >
                  지원하기
                </p>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </HStack>
    </header>
  )
}

export default Header
