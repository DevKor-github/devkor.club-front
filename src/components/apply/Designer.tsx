import { zodResolver } from '@hookform/resolvers/zod'
import { css } from '@styled-stytem/css'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import Question from '@/components/apply/Question'
import { designerSchema } from '@/lib/zod/designer-schema'

const Designer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<z.infer<typeof designerSchema>>({
    resolver: zodResolver(designerSchema),
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
  function onSubmit(values: z.infer<typeof designerSchema>) {
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
      <Question<typeof designerSchema>
        title="본인을 자유롭게 소개해주세요."
        limit
        register={register}
        errors={errors}
        filed={'answer1'}
      />
      <Question<typeof designerSchema>
        title="과거에 디자인했던 프로젝트나 경험에 대해서 자세히 서술해주세요"
        register={register}
        errors={errors}
        filed={'answer2'}
      />
      <Question<typeof designerSchema>
        title="가장 뛰어나다고 생각하는 본인의 능력을 서술해주세요."
        limit
        register={register}
        errors={errors}
        filed={'answer3'}
      />
      <Question<typeof designerSchema>
        title="새로운 프로젝트를 시작할 때 어떤 절차로 진행하는지 디자인 프로세스를 서술해주세요."
        limit
        register={register}
        errors={errors}
        filed={'answer4'}
      />
      <Question<typeof designerSchema>
        title={`개발자, 프로젝트 매니저 등 다른 팀원과 협업할 때 \n중요하게 생각하는 가치와 갈등 상황에서 본인의 대처 방안을 서술해주세요.`}
        limit
        register={register}
        errors={errors}
        filed={'answer5'}
      />
      <Question<typeof designerSchema>
        title="DevKor에서 얻어가고 싶은 것들, 하고 싶은 활동들에 대해 서술해주세요."
        limit
        register={register}
        errors={errors}
        filed={'answer6'}
      />
    </form>
  )
}

export default Designer
