import { css } from '@styled-stytem/css'

import TrackCard from '@/components/apply/TrackCard'
import { TrackCardProps } from '@/types/track'

const TrackCards = ({ selectedTrack, handleSelectTrack }: Omit<TrackCardProps, 'track'>) => {
  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: 5, px: { S: 8, XS: 4 } })}>
      <p className={css({ fontSize: { S: 18, XSDown: 16 }, fontWeight: { S: 700, XSDown: 600 } })}>지원 파트</p>
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: { M: 5, S: 4, SDown: 4, XS: 1 },
          flexWrap: 'wrap',
          justifyContent: 'center'
        })}
      >
        <TrackCard track="FE" selectedTrack={selectedTrack} handleSelectTrack={handleSelectTrack} />
        <TrackCard track="BE" selectedTrack={selectedTrack} handleSelectTrack={handleSelectTrack} />
        <TrackCard track="DE" selectedTrack={selectedTrack} handleSelectTrack={handleSelectTrack} />
        <TrackCard track="PM" selectedTrack={selectedTrack} handleSelectTrack={handleSelectTrack} />
      </div>
    </div>
  )
}

export default TrackCards
