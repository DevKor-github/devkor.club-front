import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'

import { apiClient } from '@/api/apiClient'
import { CommonResponse } from '@/domain/common/types'
import { RECRUIT_QUERY_KEY } from '@/domain/recruit/queries'
import { RecruitQuestion } from '@/domain/recruit/types'
import { Track } from '@/types/track'

const getRecruitQuestions = async (track: Track) => {
  const response = await apiClient.get<CommonResponse<RecruitQuestion>>(`/recruit/questions/${track}`)
  return response.data.data.questions
}

export const useQueryRecruitQuestions = (track: Track) => {
  return queryOptions({
    queryKey: RECRUIT_QUERY_KEY.questions(track),
    queryFn: () => getRecruitQuestions(track)
  })
}

export const useReadRecruitQuestions = (track: Track) => {
  const query = useQueryRecruitQuestions(track)
  return useSuspenseQuery(query)
}
