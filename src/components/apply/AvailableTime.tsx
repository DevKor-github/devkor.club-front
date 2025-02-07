import { css } from '@styled-stytem/css'
import { useAtom, useAtomValue } from 'jotai'
import { useCallback, useEffect } from 'react'

import Date from '@/components/apply/Date'
import DateOption from '@/components/apply/DateOption'
import { selectedDate, selectedTimes } from '@/lib/zotai/store'

const timeConfig = [
  '1:00 PM - 2:00PM',
  '2:00 PM - 3:00PM',
  '3:00 PM - 4:00PM',
  '4:00 PM - 5:00PM',
  '5:00 PM - 6:00PM',
  '9:00 PM - 10:00PM',
  '10:00 PM - 11:00PM'
]
interface AvaliableTimeProps {
  setInterviewTime: (time: number) => void
}
const AvailableTime = ({ setInterviewTime }: AvaliableTimeProps) => {
  const selected = useAtomValue(selectedDate)
  const [selectedTime, setSelectedTime] = useAtom(selectedTimes)

  const handleTimeSelect = useCallback(
    (index: number) => {
      setSelectedTime(t => t.map((time, i) => (i === index ? { selected: !time.selected } : time)))
    },
    [setSelectedTime]
  )
  useEffect(() => {
    let bits = 0
    selectedTime.forEach((t, i) => {
      if (t.selected) bits |= 1 << i
    })
    setInterviewTime(bits)
  }, [selectedTime, setInterviewTime])
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
          <Date date={24} selected={selected === 24} />
          <Date date={25} selected={selected === 25} />
          <Date date={26} selected={selected === 26} />
        </div>
        {timeConfig.map((time, index) => (
          <DateOption
            key={index + (selected - 24) * 7} // prevent animation inconsistency between date
            index={index + (selected - 24) * 7}
            dateOption={time}
            selected={selectedTime[index + (selected - 24) * 7]?.selected}
            handleSelecteTime={handleTimeSelect}
          />
        ))}
      </div>
    </div>
  )
}

export default AvailableTime
