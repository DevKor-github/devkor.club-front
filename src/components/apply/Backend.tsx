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
  const onUpload = useCallback((url: string) => form.setValue('answer9', url), [])

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
        title="GitHub 또는 개인 블로그가 있다면, 링크를 입력해주세요."
        register={form.register}
        errors={form.formState.errors}
        filed={'answer2'}
      />
      <Question<typeof backendSchema>
        title="본인의 Github 저장소 중 가장 코드 퀄리티가 높은 저장소가 무엇인지, 그리고 어떤 저장소인지 간략하게 설명해주세요."
        limit
        register={form.register}
        errors={form.formState.errors}
        filed={'answer3'}
      />
      <Question<typeof backendSchema>
        title="과거에 본인이 수행했던 프로젝트나 설계했던 프로그램, 공부했던 경험에 대해 자세히 서술해주세요."
        limit
        register={form.register}
        errors={form.formState.errors}
        filed={'answer4'}
      />
      <Question<typeof backendSchema>
        title="특정 서비스 기능을 구현하는 것에서 더 나아가 서비스를 모니터링하고 성능을 개선해본 경험이 있다면 서술해주세요."
        limit
        register={form.register}
        errors={form.formState.errors}
        filed={'answer5'}
      />
      <Question<typeof backendSchema>
        title="본인이 생각하는 잘하는 BE 개발자는 어떤 개발자인지 서술해주세요."
        limit
        register={form.register}
        errors={form.formState.errors}
        filed={'answer6'}
      />
      <Question<typeof backendSchema>
        title="본인의 개발 실력을 평가하고 평가에 대한 이유도 함께 서술해주세요."
        limit
        register={form.register}
        errors={form.formState.errors}
        filed={'answer7'}
      />
      <Question<typeof backendSchema>
        title="지원자분이 개발을 하는 이유와 DevKor에서 성장하고 싶은 점에 대해서 작성해주세요."
        limit
        register={form.register}
        errors={form.formState.errors}
        filed={'answer8'}
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
