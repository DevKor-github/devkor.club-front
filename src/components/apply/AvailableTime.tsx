import { css } from '@styled-stytem/css'
import { useCallback, useState } from 'react'

import DateRadio from '@/components/apply/Date'
import DateOption from '@/components/apply/DateOption'
import { useReadRecruitConfig } from '@/domain/recruit/hooks/useReadRecruitConfig'

interface AvaliableTimeProps {
  selectedInterviewTime: string[]
  setInterviewTime: (time: string) => void
}
const AvailableTime = ({ selectedInterviewTime, setInterviewTime }: AvaliableTimeProps) => {
  const { data: recruitConfig } = useReadRecruitConfig()
  const interviewStart = new Date(recruitConfig.interview.start).getDate()
  const interviewEnd = new Date(recruitConfig.interview.end).getDate()
  const timeSlots = recruitConfig.interview.timeSlots
  const [selectedDate, setSelectedDate] = useState(interviewStart)

  const groupedByDateDisplay = timeSlots.reduce(
    (acc, timeSlot) => {
      const date = new Date(timeSlot)
      const dateKey = date.getDate()

      if (!acc[dateKey]) acc[dateKey] = []

      const from = date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      })
      const to = new Date(date.getTime() + 1 * 60 * 60 * 1000).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      })
      const timeString = `${from} - ${to}`

      acc[dateKey].push(timeString)
      return acc
    },
    {} as Record<number, string[]>
  )

  const groupedByDateValue = timeSlots.reduce(
    (acc, timeSlot) => {
      const date = new Date(timeSlot)
      const dateKey = date.getDate()

      if (!acc[dateKey]) acc[dateKey] = []

      acc[dateKey].push(timeSlot)
      return acc
    },
    {} as Record<number, string[]>
  )

  const handleSelectDate = useCallback((date: number) => setSelectedDate(date), [])
  return (
    <div
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
      <div
        className={css({
          display: 'flex',
          gap: 2.5,
          justifyContent: 'flex-start',
          alignItems: 'center',
          alignSelf: 'stretch'
        })}
      >
        <p
          className={css({
            S: { fontSize: 18, fontWeight: 700 },
            XS: { fontSize: 16, fontWeight: 600 },
            color: 'label.50'
          })}
        >
          면접 일정
        </p>
        <div
          className={css({
            display: 'flex',
            gap: 1,
            alignItems: 'center'
          })}
        >
          <p
            className={css({
              S: { fontSize: 16, fontWeight: 600 },
              XS: { fontSize: 14, fontWeight: 600 },
              color: 'label.50/80'
            })}
          >
            가능한 면접 날짜를 모두 선택해 주세요.
          </p>
          <div
            className={css({
              w: 1.5,
              h: 1.5,
              rounded: 'full',
              bgColor: 'secondary.70'
            })}
          />
        </div>
      </div>
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          alignItems: 'flex-start',
          gap: 2.5,
          alignSelf: 'stretch'
        })}
      >
        <div
          className={css({
            display: 'flex',
            px: 5,
            gap: 2.5,
            alignItems: 'center'
          })}
        >
          {Array.from({ length: interviewEnd - interviewStart + 1 }, (_, i) => i + interviewStart).map(date => (
            <DateRadio key={date} date={date} selected={selectedDate === date} handleSelectDate={handleSelectDate} />
          ))}
        </div>
        {groupedByDateDisplay[selectedDate].map((time, index) => (
          <DateOption
            key={groupedByDateValue[selectedDate][index]}
            index={groupedByDateValue[selectedDate][index]}
            dateOption={time}
            selected={selectedInterviewTime.includes(groupedByDateValue[selectedDate][index])}
            handleSelectInterviewTime={setInterviewTime}
          />
        ))}
      </div>
    </div>
  )
}

export default AvailableTime
