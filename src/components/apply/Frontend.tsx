import { css } from '@styled-stytem/css'
import { useCallback, useState } from 'react'

import type { techSchema } from '@/lib/zod/fontend-schema'
import type { UseFormReturn } from 'react-hook-form'
import type { z } from 'zod'

import Portfolio from '@/components/apply/Portfolio'
import Question from '@/components/apply/Question'

interface FrontendProps {
  form: UseFormReturn<z.infer<typeof techSchema>>
}
const Frontend = ({ form }: FrontendProps) => {
  function onSubmit(values: z.infer<typeof techSchema>) {
    console.log(values)
  }
  const [fileName, setFileName] = useState<string | null>(null) // 저장되는 파일 이름 -> 나중에 DB에 보낼 값
  const [originalFileName, setOriginalFileName] = useState<string | null>(null) // 화면에 표시되는, 원래 파일 이름

  const handleFileSelect = useCallback((fileName: string, originalFileName: string) => {
    setFileName(fileName)
    setOriginalFileName(originalFileName)
  }, [])

  const handleDeleteFile = useCallback(() => {
    setFileName(null)
    setOriginalFileName(null)
    form.setValue('answer6', undefined)
  }, [form])

  const onUpload = useCallback((url: string) => form.setValue('answer6', url), [form])

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
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
        파트별 질문
      </p>
      <Question<typeof techSchema>
        title="본인을 자유롭게 소개해주세요."
        limit
        register={form.register}
        errors={form.formState.errors}
        filed={'answer1'}
      />
      <Question<typeof techSchema>
        title="GitHub 링크를 입력해주세요."
        register={form.register}
        errors={form.formState.errors}
        filed={'answer2'}
      />
      <Question<typeof techSchema>
        title="진행했던 프로젝트가 있다면 소개해주세요. 또한, 그 프로젝트를 통해 무엇을 경험했는지 설명해주세요."
        limit
        register={form.register}
        errors={form.formState.errors}
        filed={'answer3'}
      />
      <Question<typeof techSchema>
        title="본인이 개발을 하는 이유를 설명하고, 뛰어난 FE 개발자는 어떤 개발자인지 정의해주세요."
        limit
        register={form.register}
        errors={form.formState.errors}
        filed={'answer4'}
      />
      <Question<typeof techSchema>
        title="DevKor에서 하고 싶은 활동과 얻어가고자 하는 것을 제시하고, 이를 통해 어떤 FE 개발자로 성장하고 싶은지 서술해주세요."
        limit
        register={form.register}
        errors={form.formState.errors}
        filed={'answer5'}
      />
      <Portfolio
        fileName={fileName}
        originalFileName={originalFileName}
        handleDeleteFile={handleDeleteFile}
        handleFileSelect={handleFileSelect}
        onUpload={onUpload}
      />
    </form>
  )
}

export default Frontend
