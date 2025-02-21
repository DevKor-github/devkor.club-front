import { z } from 'zod'

export const personalInfoSchema = z.object({
  name: z.string().refine(val => val.length > 0, { message: '이름을 입력해주세요.' }),
  email: z.string().email({ message: '이메일 형식이 올바르지 않습니다.' }),
  phone: z
    .string()
    .length(13, { message: '휴대폰 번호 형식이 올바르지 않습니다.' })
    .regex(/^010-\d{4}-\d{4}$/, {
      message: '휴대폰 번호 형식이 올바르지 않습니다.'
    }),
  major: z.string().min(4, { message: '학과를 입력해주셔야 합니다' }),
  studentId: z.string().length(10, { message: '학번은 10자리여야 합니다.' }),
  interviewTime: z.number().refine(val => val > 0, { message: '면접 시간을 선택해주세요.' })
})
