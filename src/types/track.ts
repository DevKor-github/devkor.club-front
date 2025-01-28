export type Track = 'FE' | 'BE' | 'PM' | 'PD'

export interface TrackCardProps {
  track: Track
  selectedTrack: Track | null
  handleSelectTrack: (value: Track) => void
}
