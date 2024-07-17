import { useMutation } from '@tanstack/react-query'

import { apiClient } from '../apiClient'

import type { PmApplicationRequest } from '../types/application'

const postPmApplication = async (data: PmApplicationRequest) => {
  const response = await apiClient.post('/recruit/apply/pm', data)
  return response.data
}

export const usePostPmApplication = () => {
  return useMutation({
    mutationFn: postPmApplication,
    onSuccess: () => alert('지원이 완료되었습니다.'),
    onError: () => alert('서버 오류로 지원에 실패했습니다.')
  })
}
