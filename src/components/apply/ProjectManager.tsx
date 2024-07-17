import { zodResolver } from '@hookform/resolvers/zod'
import { css } from '@styled-stytem/css'
import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import Portfolio from '@/components/apply/Portfolio'
import Question from '@/components/apply/Question'
import { pmSchema } from '@/lib/zod/pm-schema'

const ProjectManager = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<z.infer<typeof pmSchema>>({
    resolver: zodResolver(pmSchema),
    defaultValues: {
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: ''
    },
    mode: 'onBlur'
  })
  function onSubmit(values: z.infer<typeof pmSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  const [file, setFile] = useState<File | null>(null)
  const handleFileSelect = useCallback((file: File | null) => setFile(file), [])
  const handleDeleteFile = useCallback(() => setFile(null), [])
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
      <Question<typeof pmSchema>
        title="본인을 자유롭게 소개해주세요."
        limit
        register={register}
        errors={errors}
        filed={'answer1'}
      />
      <Question<typeof pmSchema>
        title={`본인이 어떤 문제를 주도적으로 해결해 본 경험, 또는 어떤 일에 몰입해서 참여한 경험에 대해 서술해주세요. \n그 과정에서 본인의 역할 및 배운 점을 서술해주세요.`}
        register={register}
        errors={errors}
        filed={'answer2'}
      />
      <Question<typeof pmSchema>
        title="협업해 본 경험(특히 개발자와 디자이너), 그리고 그 과정에서 있던 갈등 관리 경험에 대해 서술해주세요."
        limit
        register={register}
        errors={errors}
        filed={'answer3'}
      />
      <Question<typeof pmSchema>
        title="DevKor에서 얻어가고 싶은 것들, 하고 싶은 활동들에 대해 서술해주세요."
        limit
        register={register}
        errors={errors}
        filed={'answer4'}
      />
      <Portfolio file={file} handleDeleteFile={handleDeleteFile} handleFileSelect={handleFileSelect} />
    </form>
  )
}

export default ProjectManager
