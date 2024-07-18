import { css } from '@styled-stytem/css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Check from '@/assets/Check.png'
const ApplyResultPage = () => {
  const navigate = useNavigate()
  const navigateToHome = () => {
    navigate('/')
  }
  useEffect(() => {
    const isDone = localStorage.getItem('application')
    if (isDone) {
      localStorage.removeItem('application')
    } else {
      navigateToHome()
    }
  }, [])

  return (
    <section
      className={css({
        display: 'flex',
        w: 'full',
        h: 'screen',
        flexDir: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      })}
    >
      <img src={Check} alt="check" className={css({ width: 128, height: 128 })} />
      <div
        className={css({
          marginTop: '20px',
          fontSize: { M: 48, S: 40, XS: 32, XSDown: 32 },
          fontWeight: 700,
          color: 'label.50'
        })}
      >
        제출 완료
      </div>
      <div
        className={css({
          fontSize: { M: 20, S: 16, XS: 14, XSDown: 14 },
          fontWeight: 500,
          color: 'label.80'
        })}
      >
        지원해 주셔서 감사합니다.
      </div>
      <button
        className={css({
          marginTop: '20px',
          display: 'flex',
          padding: '7px 40px',
          borderRadius: 24,
          justifyContent: 'center',
          alignItems: 'center',
          rounded: 'full',
          color: 'label.100',
          bgColor: 'primary.70',
          _hover: { bgColor: '#FFC51380' },
          cursor: 'pointer',
          transition: 'background-color 0.2s, color 0.2s',
          fontSize: 20,
          fontWeight: 600
        })}
        onClick={navigateToHome}
      >
        완료
      </button>
    </section>
  )
}

export default ApplyResultPage
