import { zodResolver } from '@hookform/resolvers/zod'
import { css } from '@styled-stytem/css'
import { textarea } from '@styled-stytem/recipes'
import { useForm } from 'react-hook-form'
import ReactTextareaAutosize from 'react-textarea-autosize'
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
      <p className={css({ fontSize: 18, fontWeight: 700, color: 'label.50' })}>인적 사항</p>
      <Question register={register} errors={errors} filed={'name'} />
      <Question register={register} errors={errors} filed={'email'} />
      <Question register={register} errors={errors} filed={'phone'} />
      <div className={css({ display: 'flex', gap: 5, alignItems: 'center', alignSelf: 'stretch' })}>
        <Question register={register} errors={errors} filed={'major'} />
        <Question register={register} errors={errors} filed={'studentId'} />
      </div>
    </form>
  )
}

export default PersonalInfo
