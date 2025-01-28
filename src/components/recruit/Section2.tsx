import { css } from '@styled-stytem/css'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '@/components/ui/button'

const RecruitSection2 = () => {
  const navigate = useNavigate()
  const handleNavigate = useCallback(() => navigate('/apply'), [navigate])
  return (
    <section
      key="section2"
      className={css({
        display: 'flex',
        flexDir: 'column',
        w: 'full',
        maxWidth: 'calc(1240px + 64px)',
        gap: 7,
        justifyContent: 'center',
        alignItems: { XS: 'center', M: 'flex-start' },
        px: '32px',
        h: '100vh'
      })}
    >
      <h1
        className={css({
          fontSize: { L: 64, M: 56, XS: 32 },
          fontWeight: 700,
          color: 'label.50',
          textAlign: { XS: 'center', M: 'unset' }
        })}
      >
        DevKor <br />
        신입 부원 모집
      </h1>
      <p
        className={css({
          fontSize: { S: 20, XS: 12 },
          fontWeight: 400,
          color: 'label.70',
          textAlign: { XS: 'center', M: 'unset' }
        })}
      >
        디자이너, 개발자, 기획자의 협업을 통해 <br />
        유저 경험을 더욱 중시하는 서비스를 출시 하고자 합니다. <br />
        모든 포지션이 프로젝트의 기획부터 개발 및 디자인, 운영까지 모든 과정에 참여합니다.
      </p>
      <Button variant="colored" onClick={handleNavigate}>
        지원서 작성하기
      </Button>
    </section>
  )
}

export default RecruitSection2
