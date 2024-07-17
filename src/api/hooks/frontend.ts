import { useMutation } from '@tanstack/react-query'

import { apiClient } from '@/api/apiClient'
import { FeApplicationRequest } from '@/api/types/application'

const postFrontApplication = async (data: FeApplicationRequest) => {
  const response = await apiClient.post('/recruit/apply/fe', data)
  return response.data
}

export const usePostFrontApplication = () => {
  return useMutation({
    mutationFn: postFrontApplication,
    onSuccess: () => alert('지원이 완료되었습니다.'),
    onError: () => alert('서버 오류로 지원에 실패했습니다.')
  })
}
