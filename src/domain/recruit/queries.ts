export const RECRUIT_QUERY_KEY = {
  base: () => ['recruit'] as const,
  config: () => [...RECRUIT_QUERY_KEY.base(), 'config'] as const
}
