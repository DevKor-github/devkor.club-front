import { useMutation } from '@tanstack/react-query'

import type { FeApplicationRequest } from '@/api/types/application'

import { apiClient } from '@/api/apiClient'

const postFrontApplication = async (data: FeApplicationRequest) => {
  const response = await apiClient.post('/recruit/apply/fe', data)
  return response.data
}

export const usePostFrontApplication = () => {
  return useMutation({
    mutationFn: postFrontApplication,
    onError: () => alert('서버 오류로 지원에 실패했습니다. 다시 시도해주세요.')
  })
}
