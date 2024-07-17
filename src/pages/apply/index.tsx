import { css } from '@styled-stytem/css'
import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import TrackCards from '@/components/apply/TrackCards'
import Button from '@/components/ui/button'
import { Track } from '@/types/track'

const ApplyPage = () => {
  const navigate = useNavigate()
  const [track, setTrack] = useState<Track | null>(null)
  const handlSelectTrack = useCallback((value: Track) => setTrack(t => (t === value ? null : value)), [])
  return (
    <section
      className={css({
        display: 'flex',
        w: 'full',
        h: '100vh',
        flexDir: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        px: 100,
        gap: 180
      })}
    >
      <div className={css({ display: 'flex', width: 'full', flexDir: 'column', alignItems: 'center', gap: 85 })}>
        <h1 className={css({ fontSize: 48, fontWeight: 700, color: 'label.50' })}>지원서 작성하기</h1>
        <TrackCards selectedTrack={track} handleSelectTrack={handlSelectTrack} />
      </div>
      <Button
        variant="gray"
        disabled={!track}
        className={css({ display: 'flex', alignSelf: 'flex-end' })}
        onClick={() => navigate(`/apply/application/${track}`)}
      >
        다음
      </Button>
    </section>
  )
}

export default ApplyPage
