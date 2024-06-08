import { css } from '@styled-stytem/css'
import { Link } from 'react-router-dom'

import DevKorLogo from '@/assets/devkorLogo.svg'
import Button from '@/components/ui/button'

const headerConfig = [
  { path: '/about', label: '소개' },
  { path: '/project', label: '프로젝트' },
  { path: '/study', label: '스터디' },
  { path: '/blog', label: '블로그' }
]
const Header = () => {
  return (
    <header
      className={css({
        position: 'sticky',
        top: 0,
        display: 'flex',
        alignItems: 'center',
        px: '150px',
        h: '100px',
        color: 'label.70'
      })}
    >
      <nav className={css({ display: 'flex', w: 'full', justifyContent: 'space-between', textStyle: 'heading3_M' })}>
        <Link to="/">
          <img src={DevKorLogo} alt="DevKor" className={css({ w: 16, h: 8 })} />
        </Link>
        <div className={css({ display: 'flex', gap: '60px', alignItems: 'center' })}>
          <div className={css({ display: 'flex', gap: 5 })}>
            {headerConfig.map(item => (
              <Link
                to={item.path}
                key={item.path}
                className={css({ _hover: { transition: 'color 0.25s', color: 'label.80' } })}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Button
            className={css({
              px: '30px',
              py: '6px',
              rounded: '24px',
              border: '1.5px solid',
              borderColor: 'label.70',
              bg: 'none',
              color: 'label.70',
              textStyle: 'heading3_M',
              _hover: {
                transition: 'border-color 0.25s, color 0.25s',
                borderColor: 'label.80',
                color: 'label.80'
              }
            })}
          >
            지원하기
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default Header
