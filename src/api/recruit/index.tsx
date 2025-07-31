import { apiClient } from '@/api/apiClient'

export const fetchPresignedUrl = async (fileName: string) => {
  const response = await apiClient.post('/presigned-url', {
    fileName
  })
  return response.data
}

export const uploadImageToS3 = async (presignedUrl: string, file: File) => {
  try {
    await fetch(presignedUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/pdf'
      },
      body: file
    })
  } catch (error) {
    console.error('Failed to upload image', error)
    throw error
  }
}
