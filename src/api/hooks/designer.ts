import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import { apiClient } from '@/api/apiClient'
import { DeApplicationRequest } from '@/api/types/application'

const postDeApplication = async (data: DeApplicationRequest) => {
  const response = await apiClient.post('/recruit/apply/de', data)
  return response.data
}

export const usePostDeApplication = () => {
  return useMutation({
    mutationFn: postDeApplication,
    onError: error => {
      if (error instanceof AxiosError) {
        if (error.response?.status === 406) {
          alert('입력 형식을 다시 한 번 확인 부탁드립니다.')
        } else alert('서버 오류로 지원에 실패했습니다. 다시 시도해주세요.')
      } else alert('서버 오류로 지원에 실패했습니다. 다시 시도해주세요.')
    }
  })
}
