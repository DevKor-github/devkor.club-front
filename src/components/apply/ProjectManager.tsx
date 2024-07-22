import { css } from '@styled-stytem/css'
import { useCallback, useState } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { z } from 'zod'

import Portfolio from '@/components/apply/Portfolio'
import Question from '@/components/apply/Question'
import { pmSchema } from '@/lib/zod/pm-schema'
interface ProjectManagerProps {
  form: UseFormReturn<z.infer<typeof pmSchema>>
}
const ProjectManager = ({ form }: ProjectManagerProps) => {
  function onSubmit(values: z.infer<typeof pmSchema>) {
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
  const onUpload = useCallback((url: string) => form.setValue('answer5', url), [])

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
      <Question<typeof pmSchema>
        title="본인을 자유롭게 소개해주세요."
        limit
        register={form.register}
        errors={form.formState.errors}
        filed={'answer1'}
      />
      <Question<typeof pmSchema>
        title={`본인이 어떤 문제를 주도적으로 해결해 본 경험, 또는 어떤 일에 몰입해서 참여한 경험에 대해 서술해주세요. \n그 과정에서 본인의 역할 및 배운 점을 서술해주세요.`}
        register={form.register}
        errors={form.formState.errors}
        filed={'answer2'}
      />
      <Question<typeof pmSchema>
        title="협업해 본 경험(특히 개발자와 디자이너), 그리고 그 과정에서 있던 갈등 관리 경험에 대해 서술해주세요."
        limit
        register={form.register}
        errors={form.formState.errors}
        filed={'answer3'}
      />
      <Question<typeof pmSchema>
        title="DevKor에서 얻어가고 싶은 것들, 하고 싶은 활동들에 대해 서술해주세요."
        limit
        register={form.register}
        errors={form.formState.errors}
        filed={'answer4'}
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

export default ProjectManager
