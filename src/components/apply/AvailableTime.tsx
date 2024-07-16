import { css } from '@styled-stytem/css'

const AvailableTime = () => {
  return (
    <div
      className={css({
        display: 'flex',
        w: 'full',
        maxW: 820,
        flexDir: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignSelf: 'center',
        gap: 2.5
      })}
    >
      <div
        className={css({
          display: 'flex',
          gap: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          alignSelf: 'stretch'
        })}
      >
        <p className={css({ fontSize: 18, fontWeight: 700, color: 'label.50' })}>면접 일정</p>
        <p className={css({ fontSize: 12, fontWeight: 400, color: 'label.80' })}>
          가능한 면접 날짜를 모두 선택해 주세요.
        </p>
        <div className={css({ w: 1.5, h: 1.5, rounded: 'full', bgColor: 'secondary.70' })} />
      </div>
    </div>
  )
}

export default AvailableTime
