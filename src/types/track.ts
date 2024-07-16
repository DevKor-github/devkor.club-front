export type Track = 'FE' | 'BE' | 'PM' | 'DE'

export interface TrackCardProps {
  track: Track
  selectedTrack: Track | null
  handleSelectTrack: (value: Track) => void
}
