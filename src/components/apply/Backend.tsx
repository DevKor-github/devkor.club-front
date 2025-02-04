import { css } from '@styled-stytem/css'
import { useCallback, useState } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { z } from 'zod'

import Portfolio from '@/components/apply/Portfolio'
import Question from '@/components/apply/Question'
import { backendSchema } from '@/lib/zod/backend-schema'

interface BackendProps {
  form: UseFormReturn<z.infer<typeof backendSchema>>
}
const Backend = ({ form }: BackendProps) => {
  function onSubmit(values: z.infer<typeof backendSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
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
  }, [])
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  const onUpload = useCallback((url: string) => form.setValue('answer6', url), [])

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
      <Question<typeof backendSchema>
        title="본인을 자유롭게 소개해주세요."
        limit
        register={form.register}
        errors={form.formState.errors}
        filed={'answer1'}
      />
      <Question<typeof backendSchema>
        title="Github 링크를 입력해주세요."
        register={form.register}
        errors={form.formState.errors}
        filed={'answer2'}
      />
      <Question<typeof backendSchema>
        title="진행했던 프로젝트가 있다면 소개해주세요. 또한, 그 프로젝트를 통해 무엇을 경험했는지 설명해주세요."
        limit
        register={form.register}
        errors={form.formState.errors}
        filed={'answer3'}
      />
      <Question<typeof backendSchema>
        title="개발을 공부하게 된 계기에 대해 서술해주세요."
        limit
        register={form.register}
        errors={form.formState.errors}
        filed={'answer4'}
      />
      <Question<typeof backendSchema>
        title="DevKor에서 하고 싶은 활동과 얻어가고자 하는 것을 제시하고, 이를 통해 어떤 BE 개발자로 성장하고 싶은지 서술해주세요."
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

export default Backend
