import { css } from '@styled-stytem/css'

const ApplyPage = () => {
  return (
    <section
      className={css({ display: 'flex', w: 'full', h: '100vh', justifyContent: 'center', alignItems: 'center' })}
    >
      <div className={css({ display: 'flex', width: 'full', flexDir: 'column', alignItems: 'center', gap: 85 })}>
        <h1 className={css({ fontSize: 48, fontWeight: 700, color: 'label.50' })}>지원서 작성하기</h1>
        <div>
          <p className={css({ fontSize: 18, fontWeight: 700 })}>지원 파트</p>
        </div>
      </div>
    </section>
  )
}

export default ApplyPage
