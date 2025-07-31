import { Track } from '@/types/track'

export const RECRUIT_QUERY_KEY = {
  base: () => ['recruit'] as const,
  config: () => [...RECRUIT_QUERY_KEY.base(), 'config'] as const,
  questions: (track: Track) => [...RECRUIT_QUERY_KEY.base(), 'question', track] as const
}
