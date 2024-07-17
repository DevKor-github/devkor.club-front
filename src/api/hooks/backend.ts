import { useMutation } from '@tanstack/react-query'

import { apiClient } from '../apiClient'

import type { BeApplicationRequest } from '../types/application'

const postBackApplication = async (data: BeApplicationRequest) => {
  const response = await apiClient.post('/recruit/apply/be', data)
  return response.data
}

export const usePostBackApplication = () => {
  return useMutation({
    mutationFn: postBackApplication,
    onSuccess: () => alert('지원이 완료되었습니다.'),
    onError: () => alert('서버 오류로 지원에 실패했습니다.')
  })
}
