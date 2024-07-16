import { css } from '@styled-stytem/css'
import { textarea } from '@styled-stytem/recipes'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import ReactTextareaAutosize from 'react-textarea-autosize'
import { z } from 'zod'

import { personalInfoSchema } from '@/lib/zod/personal-info'

interface QuestionProps {
  register: UseFormRegister<z.infer<typeof personalInfoSchema>>
  errors: FieldErrors<z.infer<typeof personalInfoSchema>>
  filed: keyof z.infer<typeof personalInfoSchema>
}

type FiledConfig = {
  [key in keyof z.infer<typeof personalInfoSchema>]: {
    label: string
    placeholder: string
  }
}
const filedConfig: FiledConfig = {
  name: { label: '이름', placeholder: '이름을 입력해주세요.' },
  email: { label: '이메일', placeholder: '이메일을 입력해주세요.' },
  phone: { label: '휴대폰 번호', placeholder: '휴대폰 번호를 입력해주세요. (형식 010-0000-0000)' },
  major: { label: '학과', placeholder: '학과를 입력해주세요.' },
  studentId: { label: '학번', placeholder: '10자리 학번을 입력해주세요 ' }
}
const Question = ({ register, errors, filed }: QuestionProps) => {
  const filedKR = filedConfig[filed]
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        alignItems: 'flex-start',
        gap: 2.5,
        alignSelf: 'stretch',
        fontSize: 16,
        fontWeight: 600,
        color: 'label.80',
        w: 'full'
      })}
    >
      <div
        className={css({
          display: 'flex',
          px: 5,
          gap: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          alignSelf: 'stretch'
        })}
      >
        {filedKR.label}
        <div className={css({ w: 1.5, h: 1.5, rounded: 'full', bgColor: 'secondary.70' })} />
      </div>
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          gap: 2.5,
          justifyContent: 'center',
          alignItems: 'flex-start',
          alignSelf: 'stretch'
        })}
      >
        <ReactTextareaAutosize
          className={textarea({ variant: errors?.[filed]?.message ? 'warning' : undefined })}
          {...register(filed)}
          placeholder={`${filedKR.placeholder}`}
        />
        <p className={css({ px: 5, color: 'warning' })}>{errors?.[filed]?.message}</p>
      </div>
    </div>
  )
}

export default Question
