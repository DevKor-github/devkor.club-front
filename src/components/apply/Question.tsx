import { css } from '@styled-stytem/css'
import { textarea } from '@styled-stytem/recipes'
import { FieldError, Path, UseFormRegister } from 'react-hook-form'
import ReactTextareaAutosize from 'react-textarea-autosize'
import { z } from 'zod'

interface QuestionProps<T extends z.ZodObject<Record<string, z.ZodTypeAny>>> {
  title: string
  placeholder?: string
  limit?: boolean
  register: UseFormRegister<z.infer<T>>
  errors: Partial<Record<Path<z.infer<T>>, FieldError>>
  filed: Path<z.infer<T>>
}

const Question = <T extends z.ZodObject<Record<string, z.ZodTypeAny>>>({
  title,
  placeholder,
  limit,
  register,
  errors,
  filed
}: QuestionProps<T>) => {
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        alignItems: 'flex-start',
        gap: 2.5,
        alignSelf: 'stretch',
        S: { fontSize: 16, fontWeight: 600 },
        XS: { fontSize: 14, fontWeight: 600 },
        color: 'label.50/80',
        w: 'full'
      })}
    >
      <div
        className={css({
          display: 'flex',
          px: 5,
          gap: 1,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          alignSelf: 'stretch',
          whiteSpace: 'pre-wrap'
        })}
      >
        <div className={css({ display: 'inline-flex', alignItems: 'center', gap: 1 })}>
          <span>
            {title}
            {limit && (
              <span
                className={css({ fontSize: 12, fontWeight: 400, display: 'inline-flex', alignItems: 'center', gap: 1 })}
              >
                {` (300자 내외)`}
                <div className={css({ w: 1.5, h: 1.5, rounded: 'full', bgColor: 'secondary.70', flexShrink: 0 })} />
              </span>
            )}
          </span>
        </div>
      </div>
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          gap: 2.5,
          justifyContent: 'center',
          alignItems: 'flex-start',
          alignSelf: 'stretch'
        })}
      >
        <ReactTextareaAutosize
          className={textarea({ variant: errors?.[filed]?.message ? 'warning' : undefined })}
          {...register(filed)}
          placeholder={placeholder}
        />
        <p className={css({ px: 5, color: 'warning' })}>{errors?.[filed]?.message}</p>
      </div>
    </div>
  )
}

export default Question
