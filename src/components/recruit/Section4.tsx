import { css } from '@styled-stytem/css'

import Card from '@/components/recruit/Card'

const RecruitSection4 = () => {
  return (
    <section
      key="section4"
      className={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '78px',
        w: 'full',
        maxWidth: 'calc(1240px + 64px)',
        justifyContent: 'center',
        h: '100vh'
      })}
    >
      <h5 className={css({ color: 'label.50', fontSize: { S: 48, XS: 24 }, fontWeight: 700 })}>
        이런 분들과 함께하고 싶습니다.
      </h5>
      <div
        className={css({
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          XSDown: { justifyContent: 'flex-start' },
          XS: { justifyContent: 'flex-start' },
          overflowX: 'auto', // 가로 스크롤 추가
          width: '100%', // 전체 너비 사용
          padding: '32px',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        })}
      >
        <Card icons={['FE', 'BE']}>
          기능을 잘 만드는 개발자보다{'\n'}코드 레벨에서의 최적화와{'\n'}다양한 트러블 슈팅을 경험해본{' '}
          <span className={css({ color: 'label.50' })}>개발자</span>
        </Card>
        <Card icons={['DE']}>
          보기 좋은 UI에 머물기 보다{'\n'}더 나아가 유저 경험이{'\n'}좋은 화면을 설계하는{' '}
          <span className={css({ color: 'label.50' })}>디자이너</span>
        </Card>
        <Card icons={['PM']}>
          아이디어를 잘내는 기획자보다,{'\n'}구체적인 근거를 바탕으로 어떤 아이템이{'\n'}시장에 수요가 있을지 생각하고,
          {'\n'}User flow를 기획하는 <span className={css({ color: 'label.50' })}>기획자</span>
        </Card>
      </div>
    </section>
  )
}

export default RecruitSection4
