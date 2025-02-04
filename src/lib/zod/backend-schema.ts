import { z } from 'zod'

export const backendSchema = z.object({
  answer1: z.string().min(10, { message: '답변은 열 글자 이상이어야 합니다.' }),
  answer2: z.string().min(1, { message: '링크를 입력해야 합니다.' }),
  answer3: z.string().min(10, { message: '답변은 열 글자 이상이어야 합니다.' }),
  answer4: z.string().min(10, { message: '답변은 열 글자 이상이어야 합니다.' }),
  answer5: z.string().min(10, { message: '답변은 열 글자 이상이어야 합니다.' }),
  answer6: z.string().optional()
})
