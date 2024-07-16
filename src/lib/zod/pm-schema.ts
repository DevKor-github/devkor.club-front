import { z } from 'zod'

export const pmSchema = z.object({
  answer1: z
    .string()
    .min(10, { message: '답변은 열 글자 이상이어야 합니다.' })
    .max(300, { message: '답변은 300자 이하로 입력해주세요.' }),
  answer2: z
    .string()
    .min(10, { message: '답변은 열 글자 이상이어야 합니다.' })
    .max(300, { message: '답변은 300자 이하로 입력해주세요.' }),
  answer3: z
    .string()
    .min(10, { message: '답변은 열 글자 이상이어야 합니다.' })
    .max(300, { message: '답변은 300자 이하로 입력해주세요.' }),
  answer4: z
    .string()
    .min(10, { message: '답변은 열 글자 이상이어야 합니다.' })
    .max(300, { message: '답변은 300자 이하로 입력해주세요.' })
})
