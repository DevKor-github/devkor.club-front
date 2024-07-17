import { css } from '@styled-stytem/css'

import TrackCard from '@/components/apply/TrackCard'
import { TrackCardProps } from '@/types/track'

const TrackCards = ({ selectedTrack, handleSelectTrack }: Omit<TrackCardProps, 'track'>) => {
  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: 5 })}>
      <p className={css({ fontSize: 18, fontWeight: 700 })}>지원 파트</p>
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: 5
          //   alignSelf: 'stretch'
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
