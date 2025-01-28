import { css } from '@styled-stytem/css'
import { useCallback, useState } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { z } from 'zod'

import Portfolio from '@/components/apply/Portfolio'
import Question from '@/components/apply/Question'
import { designerSchema } from '@/lib/zod/designer-schema'

interface DesignerProps {
  form: UseFormReturn<z.infer<typeof designerSchema>>
}
const Designer = ({ form }: DesignerProps) => {
  function onSubmit(values: z.infer<typeof designerSchema>) {
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
  const onUpload = useCallback((url: string) => form.setValue('answer7', url), [form])

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
      <Question<typeof designerSchema>
        title="본인을 자유롭게 소개해주세요."
        limit
        register={form.register}
        errors={form.formState.errors}
        filed={'answer1'}
      />
      <Question<typeof designerSchema>
        title="과거에 디자인했던 프로젝트나 경험에 대해서 자세히 서술해주세요"
        register={form.register}
        errors={form.formState.errors}
        filed={'answer2'}
      />
      <Question<typeof designerSchema>
        title="가장 뛰어나다고 생각하는 본인의 능력을 서술해주세요."
        limit
        register={form.register}
        errors={form.formState.errors}
        filed={'answer3'}
      />
      <Question<typeof designerSchema>
        title="새로운 프로젝트를 시작할 때 어떤 절차로 진행하는지 디자인 프로세스를 서술해주세요."
        limit
        register={form.register}
        errors={form.formState.errors}
        filed={'answer4'}
      />
      <Question<typeof designerSchema>
        title={`개발자, 프로젝트 매니저 등 다른 팀원과 협업할 때 \n중요하게 생각하는 가치와 갈등 상황에서 본인의 대처 방안을 서술해주세요.`}
        limit
        register={form.register}
        errors={form.formState.errors}
        filed={'answer5'}
      />
      <Question<typeof designerSchema>
        title="DevKor에서 얻어가고 싶은 것들, 하고 싶은 활동들에 대해 서술해주세요."
        limit
        register={form.register}
        errors={form.formState.errors}
        filed={'answer6'}
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

export default Designer
