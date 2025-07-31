import { css } from '@styled-stytem/css'
import { useCallback, useEffect, useState } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { z } from 'zod'

import Portfolio from '@/components/apply/Portfolio'
import Question from '@/components/apply/Question'
import { useReadRecruitQuestions } from '@/domain/recruit/hooks/useReadRecruitQuestion'
import { getRefinedQuestions } from '@/domain/recruit/utils/getRefinedQuestions'
import { designerSchema } from '@/lib/zod/designer-schema'

interface DesignerProps {
  form: UseFormReturn<z.infer<typeof designerSchema>>
  setQuestions: (questions: string[]) => void
}
const Designer = ({ form, setQuestions }: DesignerProps) => {
  const { data: questions } = useReadRecruitQuestions('PD')

  const refinedQuestions = getRefinedQuestions(questions)

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

  useEffect(() => {
    setQuestions(questions)
  }, [questions, setQuestions])

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
      {refinedQuestions.map(({ question, limit }, index) => {
        return (
          <Question<typeof designerSchema>
            key={question}
            title={question}
            limit={limit}
            register={form.register}
            errors={form.formState.errors}
            filed={`answer${index + 1}` as keyof z.infer<typeof designerSchema>}
          />
        )
      })}
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
