import { css } from '@styled-stytem/css'
import { useParams } from 'react-router-dom'

import AvailableTime from '@/components/apply/AvailableTime'
import Backend from '@/components/apply/Backend'
import Designer from '@/components/apply/Designer'
import Frontend from '@/components/apply/Frontend'
import PersonalInfo from '@/components/apply/PersonalInfo'
import ProjectManager from '@/components/apply/ProjectManager'
import Button from '@/components/ui/button'
import { Track } from '@/types/track'
import { personalInfoSchema } from '@/lib/zod/personal-info'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useGenericForm } from '@/utils/useGenericForm'
import { usePostFrontApplication } from '@/api/hooks/frontend'

type TrackConfigType = {
  [key in Track]: string
}
const trackConfig: TrackConfigType = {
  FE: 'Front-End 프론트엔드 개발자',
  BE: 'Back-End 백엔드 개발자',
  PM: 'Project Manager 프로젝트 매니저',
  DE: 'Designer 디자이너'
}

const Application = () => {
  const { track } = useParams()
  const trackTitle = trackConfig[track as Track]

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues
  } = useForm<z.infer<typeof personalInfoSchema>>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      major: '',
      studentId: ''
    },
    mode: 'onBlur'
  })
  function onSubmit(values: z.infer<typeof personalInfoSchema>) {
    console.log(values)
  }

  const { feform, beform, pmform, deform } = useGenericForm(track as Track)

  const forms = {
    FE: feform,
    BE: beform,
    PM: pmform,
    DE: deform
  }

  const { mutate: postFe } = usePostFrontApplication()
  const handleFromSubmit = () => {
    handleSubmit(() => {})()
    forms[track as Track].handleSubmit(() => {})()
    if (isValid && forms[track as Track].formState.isValid) {
      postFe({
        ...getValues(),
        interviewTime: '10',
        ...feform.getValues()
      })
    } else console.log('hi')
  }
  return (
    <section
      className={css({
        display: 'flex',
        w: 'full',
        h: 'full',
        flexDir: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        px: 8,
        gap: 45,
        py: 144
      })}
    >
      <div className={css({ display: 'flex', width: 'full', flexDir: 'column', alignItems: 'center', gap: 85 })}>
        <div className={css({ display: 'flex', flexDir: 'column', alignItems: 'center', gap: 2.5 })}>
          <h1 className={css({ fontSize: { M: 48, S: 40, XS: 32, XSDown: 32 }, fontWeight: 700, color: 'label.50' })}>
            지원서 작성하기
          </h1>
          <h2 className={css({ fontSize: { M: 20, S: 16, XS: 14, XSDown: 14 }, fontWeight: 500, color: 'label.80' })}>
            {trackTitle}
          </h2>
        </div>
      </div>
      <PersonalInfo handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} errors={errors} />
      {track === 'FE' && <Frontend form={feform} />}
      {track === 'BE' && <Backend form={beform} />}
      {track === 'PM' && <ProjectManager form={pmform} />}
      {track === 'DE' && <Designer form={deform} />}
      <AvailableTime />
      <div
        className={css({
          display: 'flex',
          w: 'full',
          maxW: 820,
          justifyContent: 'flex-end',
          alignItems: 'center'
        })}
      >
        <Button variant="gray" disabled={!track} onClick={() => handleFromSubmit()} type="submit">
          제출하기
        </Button>
      </div>
    </section>
  )
}

export default Application
