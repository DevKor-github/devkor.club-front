import { zodResolver } from '@hookform/resolvers/zod'
import { css } from '@styled-stytem/css'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import Question from '@/components/apply/Question'
import { techSchema } from '@/lib/zod/fontend-schema'

const Frontend = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<z.infer<typeof techSchema>>({
    resolver: zodResolver(techSchema),
    defaultValues: {
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: '',
      answer5: '',
      answer6: ''
    },
    mode: 'onBlur'
  })
  function onSubmit(values: z.infer<typeof techSchema>) {
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
      <p className={css({ fontSize: 18, fontWeight: 700, color: 'label.50' })}>파트별 질문</p>
      <Question<typeof techSchema>
        title="본인을 자유롭게 소개해주세요."
        limit
        register={register}
        errors={errors}
        filed={'answer1'}
      />
      <Question<typeof techSchema>
        title="GitHub/개인 블로그 링크"
        register={register}
        errors={errors}
        filed={'answer2'}
      />
      <Question<typeof techSchema>
        title="과거에 본인이 수행했던 프로젝트나 설계했던 프로그램, 공부했던 경험에 대해 자세히 서술해주세요."
        limit
        register={register}
        errors={errors}
        filed={'answer3'}
      />
      <Question<typeof techSchema>
        title="본인의 개발 실력을 평가하고 평가에 대한 이유도 함께 서술해주세요."
        limit
        register={register}
        errors={errors}
        filed={'answer4'}
      />
      <Question<typeof techSchema>
        title="본인이 생각하는 잘하는 FE 개발자는 어떤 개발자인지 서술해주세요."
        limit
        register={register}
        errors={errors}
        filed={'answer5'}
      />
      <Question<typeof techSchema>
        title="DevKor에서 얻어가고 싶은 것들, 하고 싶은 활동들에 대해 서술해주세요."
        limit
        register={register}
        errors={errors}
        filed={'answer6'}
      />
    </form>
  )
}

export default Frontend
