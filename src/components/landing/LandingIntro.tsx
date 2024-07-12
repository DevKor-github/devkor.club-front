import { css } from '@styled-stytem/css'

import Button from '@/components/ui/button'
import { useMatchLayout } from '@/utils/useMatchLayout'

interface LandingIntroProps {
  handleClick: () => void
}
const LandingIntro = ({ handleClick }: LandingIntroProps) => {
  const mediaQuery = useMatchLayout()
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        alignItems: 'center',
        gap: '15px',
        color: 'label.100'
      })}
    >
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          alignItems: 'center'
        })}
      >
        <h1 className={css({ fontWeight: 700, fontSize: { L: 128, S: 90, XS: 40, XSDown: 40 } })}>DevKor</h1>
        <p
          className={css({
            textAlign: 'center',
            fontWeight: 400,
            fontSize: { L: 18, S: 16, XS: 14, XSDown: 14 },
            lineBreak: 'strict'
          })}
        >
          DevKor는 현실의 문제를 소프트웨어로 해결하고자 모인{' '}
          <br className={css({ display: { XSOnly: 'flex', S: 'none' } })} />
          고려대학교 소프트웨어 개발 학회입니다.
          <br />
          소프트웨어를 통해 문제를 해결하는 서비스를 출시하는 것에{' '}
          <br className={css({ display: { SDown: 'flex', M: 'none' } })} />
          목표를 두고 있습니다.
        </p>
      </div>
      {mediaQuery.M && (
        <Button size={mediaQuery.MOnly ? 'M' : 'default'} onClick={handleClick}>
          지원하기
        </Button>
      )}
    </div>
  )
}

export default LandingIntro
