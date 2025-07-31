import { css } from '@styled-stytem/css'
import { useCallback } from 'react'
import { useParams } from 'react-router-dom'

import Button from '@/components/ui/button'
import Spinner from '@/components/ui/spinner'
import { useReadRecruitConfig } from '@/domain/recruit/hooks/useReadRecruitConfig'
import { Track } from '@/types/track'

type Props = {
  isSubmitPending: boolean
  handleFromSubmit: () => void
}
const ApplicationSubmitButton = ({ isSubmitPending, handleFromSubmit }: Props) => {
  const { track = 'FE' } = useParams<{ track: Track }>()

  const { data: config } = useReadRecruitConfig()
  const { start, end } = config.applicationPeriod

  const handleClick = useCallback(() => {
    const currentTime = new Date().toISOString()
    if (currentTime < new Date(start).toISOString() || currentTime > new Date(end).toISOString()) {
      return alert(
        `지원 기간은 ${new Date(start).toLocaleDateString()} ~ ${new Date(end).toLocaleDateString()} 입니다.`
      )
    }

    handleFromSubmit()
  }, [end, handleFromSubmit, start])

  return (
    <Button
      variant="gray"
      disabled={!track}
      onClick={handleClick}
      type="submit"
      style={{
        backgroundColor: isSubmitPending ? 'rgba(255, 197, 19, 0.50)' : undefined
      }}
    >
      {isSubmitPending ? (
        <Spinner />
      ) : (
        <span className={css({ opacity: 1, transition: 'opacity 0.3s ease-in-out' })}>제출하기</span>
      )}
    </Button>
  )
}

export default ApplicationSubmitButton
