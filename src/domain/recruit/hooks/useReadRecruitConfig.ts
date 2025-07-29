import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'

import { apiClient } from '@/api/apiClient'
import { CommonResponse } from '@/domain/common/types'
import { RECRUIT_QUERY_KEY } from '@/domain/recruit/queries'
import { RecruitConfig } from '@/domain/recruit/types'

const getRecruitConfig = async () => {
  const response = await apiClient.get<CommonResponse<RecruitConfig>>('/recruit/config')
  return response.data.data
}

export const useQueryRecruitConfig = () => {
  return queryOptions({
    queryKey: RECRUIT_QUERY_KEY.config(),
    queryFn: getRecruitConfig
  })
}

export const useReadRecruitConfig = () => {
  const query = useQueryRecruitConfig()
  return useSuspenseQuery(query)
}
