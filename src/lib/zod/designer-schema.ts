import { z } from 'zod'

export const designerSchema = z.object({
  answer1: z.string().min(10, { message: '답변은 열 글자 이상이어야 합니다.' }),
  answer2: z.string().min(10, { message: '답변은 열 글자 이상이어야 합니다.' }),
  answer3: z.string().min(10, { message: '답변은 열 글자 이상이어야 합니다.' }),
  answer4: z.string().min(10, { message: '답변은 열 글자 이상이어야 합니다.' }),
  answer5: z.string().min(10, { message: '답변은 열 글자 이상이어야 합니다.' }),
  answer6: z.string().min(10, { message: '답변은 열 글자 이상이어야 합니다.' }),
  answer7: z.string().refine(val => val.length > 0, { message: '파일을 업로드해주세요.' })
})
