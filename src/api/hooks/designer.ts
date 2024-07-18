import { useMutation } from '@tanstack/react-query'

import { apiClient } from '../apiClient'

import type { DeApplicationRequest } from '../types/application'

const postDeApplication = async (data: DeApplicationRequest) => {
  const response = await apiClient.post('/recruit/apply/de', data)
  return response.data
}

export const usePostDeApplication = () => {
  return useMutation({
    mutationFn: postDeApplication,
    onError: () => alert('서버 오류로 지원에 실패했습니다. 다시 시도해주세요.')
  })
}
