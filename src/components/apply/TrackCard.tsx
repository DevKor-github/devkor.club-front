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
        w: { M: 190, S: 342, XS: 162, XSDown: 162 },
        h: { M: 200, S: 140, XS: 100, XSDown: 100 },
        bgColor: 'label.BG',
        px: 38,
        py: { M: 25, S: 18, XS: '25px', XSDown: '25px' },
        gap: { M: 8, S: 3, SDown: 3 },
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
          fontSize: { S: 18, XSDown: 16 },
          fontWeight: { S: 700, XSDown: 16 },
          color: 'label.80',
          bgColor: 'label.98',
          w: { S: '50px', XS: '40px', XSDown: '40px' },
          h: { S: '30px', XS: '20px', XSDown: '20px' },
          _checked: { bgColor: 'rgba(255, 197, 19, 0.20)', transition: 'background-color 0.1s ease-in-out' }
        })}
      >
        {track}
      </div>
      <div
        className={css({
          fontSize: { S: 24, XSDown: 18 },
          fontWeight: 500,
          color: 'label.70',
          textAlign: 'center',
          whiteSpace: { M: 'pre-wrap', S: 'nowrap', SDown: 'nowrap' }
        })}
      >
        {title}
      </div>
    </button>
  )
}

export default TrackCard
