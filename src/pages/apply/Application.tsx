import { css } from '@styled-stytem/css'
import { useParams } from 'react-router-dom'

import AvailableTime from '@/components/apply/AvailableTime'
import Backend from '@/components/apply/Backend'
import Designer from '@/components/apply/Designer'
import Frontend from '@/components/apply/Frontend'
import PersonalInfo from '@/components/apply/PersonalInfo'
import ProjectManager from '@/components/apply/ProjectManager'
import Button from '@/components/ui/button'
import { Track } from '@/types/track'

type TrackConfigType = {
  [key in Track]: string
}
const trackConfig: TrackConfigType = {
  FE: 'Front-End 프론트엔드 개발자',
  BE: 'Back-End 백엔드 개발자',
  PM: 'Project Manager 프로젝트 매니저',
  DE: 'Designer 디자이너'
}

type TackComponentType = {
  [key in Track]: React.FC
}
const tackComponent: TackComponentType = {
  FE: Frontend,
  BE: Backend,
  PM: ProjectManager,
  DE: Designer
}
const Application = () => {
  const { track } = useParams()
  const trackTitle = trackConfig[track as Track]
  const TrackComponent = tackComponent[track as Track]
  return (
    <section
      className={css({
        display: 'flex',
        w: 'full',
        h: 'full',
        flexDir: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        px: 8,
        gap: 45,
        py: 144
      })}
    >
      <div className={css({ display: 'flex', width: 'full', flexDir: 'column', alignItems: 'center', gap: 85 })}>
        <div className={css({ display: 'flex', flexDir: 'column', alignItems: 'center', gap: 2.5 })}>
          <h1 className={css({ fontSize: { M: 48, S: 40, XS: 32, XSDown: 32 }, fontWeight: 700, color: 'label.50' })}>
            지원서 작성하기
          </h1>
          <h2 className={css({ fontSize: { M: 20, S: 16, XS: 14, XSDown: 14 }, fontWeight: 500, color: 'label.80' })}>
            {trackTitle}
          </h2>
        </div>
      </div>
      <PersonalInfo />
      <TrackComponent />
      <AvailableTime />
      <div
        className={css({
          display: 'flex',
          w: 'full',
          maxW: 820,
          justifyContent: 'flex-end',
          alignItems: 'center'
        })}
      >
        <Button variant="gray" disabled={!track}>
          제출하기
        </Button>
      </div>
    </section>
  )
}

export default Application
