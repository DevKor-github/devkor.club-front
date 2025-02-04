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
      <Question<typeof pmSchema>
        title="본인을 자유롭게 소개해주세요."
        limit
        register={form.register}
        errors={form.formState.errors}
        filed={'answer1'}
      />
      <Question<typeof pmSchema>
        title={`소프트웨어로 해결할 수 있는(또는 해결해야 하는) 세상의 문제가 무엇인지 이유와 함께 서술해주세요.`}
        register={form.register}
        errors={form.formState.errors}
        filed={'answer2'}
      />
      <Question<typeof pmSchema>
        title="협업 경험(특히 개발자와 PD)과 그 과정에서의 갈등관리 경험에 대해 서술해주세요."
        limit
        register={form.register}
        errors={form.formState.errors}
        filed={'answer3'}
      />
      <Question<typeof pmSchema>
        title="아이디어 구상부터 서비스 런칭, 그리고 서비스 개선까지의 전 과정에서 PM은 어떤 역할을 수행하는지 작성하고, 본인이 그 역할을 효과적으로 수행하기 위해 갖춘 경험, 강점, 능력을 구체적으로 적어주세요."
        limit
        register={form.register}
        errors={form.formState.errors}
        filed={'answer4'}
      />
      <Question<typeof pmSchema>
        title="DevKor에서 하고 싶은 활동과 얻어가고자 하는 것을 제시하고, 이를 통해 어떤 PM 개발자로 성장하고 싶은지 서술해주세요."
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

export default ProjectManager
