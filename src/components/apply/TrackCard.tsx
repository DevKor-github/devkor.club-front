import { css } from '@styled-stytem/css'

import { Track, TrackCardProps } from '@/types/track'

type TrackConfig = {
  [key in Track]: {
    title: string
  }
}
const trackConfig: TrackConfig = {
  FE: {
    title: 'Front-End'
  },
  BE: {
    title: 'Back-End'
  },
  DE: {
    title: 'Designer'
  },
  PM: {
    title: 'Project \n Manager'
  }
}
const TrackCard = ({ track, handleSelectTrack, selectedTrack }: TrackCardProps) => {
  const { title } = trackConfig[track]
  return (
    <button
      aria-pressed={track === selectedTrack}
      className={css({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexShrink: 0,
        w: 190,
        h: 200,
        bgColor: 'label.BG',
        px: 38,
        py: 29,
        gap: 8,
        border: '1px solid {colors.label.98}',
        rounded: 20,
        cursor: 'pointer',
        transition: 'background-color 0.1s ease-in-out',
        _hover: track !== selectedTrack ? { bgColor: 'label.98' } : {},
        _pressed: { bgColor: 'rgba(255, 249, 229, 0.50)', borderColor: 'primary.70' }
      })}
      onClick={() => handleSelectTrack(track)}
    >
      <div
        aria-checked={track === selectedTrack}
        className={css({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          px: 2.5,
          py: 1,
          rounded: 25,
          fontSize: 18,
          fontWeight: 700,
          color: 'label.80',
          bgColor: 'label.98',
          w: 47,
          h: 29,
          _checked: { bgColor: 'rgba(255, 197, 19, 0.20)', transition: 'background-color 0.1s ease-in-out' }
        })}
      >
        {track}
      </div>
      <div
        className={css({
          fontSize: 24,
          fontWeight: 500,
          color: 'label.70',
          textAlign: 'center',
          whiteSpace: 'pre-wrap'
        })}
      >
        {title}
      </div>
    </button>
  )
}

export default TrackCard
