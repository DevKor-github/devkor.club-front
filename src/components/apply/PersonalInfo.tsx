import { zodResolver } from '@hookform/resolvers/zod'
import { css } from '@styled-stytem/css'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import Question from '@/components/apply/Question'
import { personalInfoSchema } from '@/lib/zod/personal-info'

const PersonalInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<z.infer<typeof personalInfoSchema>>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      major: '',
      studentId: ''
    },
    mode: 'onBlur'
  })
  function onSubmit(values: z.infer<typeof personalInfoSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={css({
        display: 'flex',
        w: 'full',
        maxW: 820,
        flexDir: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignSelf: 'center',
        gap: 2.5
      })}
    >
      <p
        className={css({
          S: { fontSize: 18, fontWeight: 700 },
          XS: { fontSize: 16, fontWeight: 600 },
          color: 'label.50'
        })}
      >
        인적 사항
      </p>
      <Question<typeof personalInfoSchema>
        title="이름"
        placeholder="이름을 입력해주세요."
        register={register}
        errors={errors}
        filed={'name'}
      />
      <Question<typeof personalInfoSchema>
        title="이메일"
        placeholder="이메일을 입력해주세요."
        register={register}
        errors={errors}
        filed={'email'}
      />
      <Question<typeof personalInfoSchema>
        title="휴대폰 번호"
        placeholder="형식: 010-0000-0000"
        register={register}
        errors={errors}
        filed={'phone'}
      />
      <div className={css({ display: 'flex', gap: 5, alignItems: 'center', alignSelf: 'stretch' })}>
        <Question<typeof personalInfoSchema>
          title="학과"
          placeholder="학과"
          register={register}
          errors={errors}
          filed={'major'}
        />
        <Question<typeof personalInfoSchema>
          title="학번"
          placeholder="10자리 학번"
          register={register}
          errors={errors}
          filed={'studentId'}
        />
      </div>
    </form>
  )
}
export default PersonalInfo
