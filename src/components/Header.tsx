import { animated } from '@react-spring/web'
import { useSpring } from '@react-spring/web'
import { css } from '@styled-stytem/css'

import DeKorLogo from '@/assets/devkorLogo.svg'

const Header = () => {
  const header = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 3000,
    config: { tension: 120, friction: 20, duration: 1200 }
  })
  return (
    <header
      className={css({
        position: 'sticky',
        top: 0,
        display: 'flex',
        justifyContent: 'flex-start',
        fontWeight: 700,
        fontSize: { L: 18, XS: 13, XSDown: 13 },
        L: { px: 100, pt: 5, h: 69 },
        M: { px: '60px', pt: 3, h: 10 },
        S: { px: 8, pt: 33 },
        XS: { px: 5, pt: 19 }
      })}
    >
      <animated.nav
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
        style={header}
      >
        <img src={DeKorLogo} alt="DevKor" className={css({ L: { w: 29 }, LDown: { w: 17 }, SDown: { w: 17 } })} />
        <p className={css({ fontFamily: 'montserrat', color: 'label.50' })}>DEVKOR</p>
      </animated.nav>
    </header>
  )
}

export default Header
