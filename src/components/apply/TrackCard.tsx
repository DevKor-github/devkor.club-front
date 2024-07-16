import { css } from '@styled-stytem/css'

import { Track } from '@/types/track'

interface TrackCardProps {
  track: Track
}
type TrackConfig = {
  [key in Track]: {
    title: string
    link: string
  }
}
const trackConfig: TrackConfig = {
  FE: {
    title: 'Front-End',
    link: '/apply/fe'
  },
  BE: {
    title: 'Back-End',
    link: '/apply/be'
  },
  DE: {
    title: 'Designer',
    link: '/apply/de'
  },
  PM: {
    title: 'Project Manager',
    link: '/apply/pm'
  }
}
const TrackCard = ({ track }: TrackCardProps) => {
  const { title, link } = trackConfig[track]
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 0,
        // L: { w: 200, h: 200 },
        // M: { w: 160, h: 160 },
        // S: { w: 120, h: 120 },
        // XS: { w: '60px', h: '60px' },
        py: 29,
        border: '1px solid {colors.label.98}'
      })}
    >
      {}
    </div>
  )
}

export default TrackCard
