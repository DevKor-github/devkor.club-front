import { css } from '@styled-stytem/css'
import { memo } from 'react'

interface DateProps {
  date: number
  selected: boolean
  handleSelectDate: (date: number) => void
}
const Date = memo(({ date, selected, handleSelectDate }: DateProps) => {
  return (
    <button
      aria-pressed={selected}
      className={css({
        display: 'flex',
        w: 30,
        h: 30,
        justifyContent: 'center',
        alignItems: 'center',
        rounded: 'full',
        color: 'label.80',
        _hover: !selected ? { bgColor: 'label.BG' } : {},
        _pressed: { bgColor: 'primary.70', color: 'label.100' },
        cursor: 'pointer',
        transition: 'background-color 0.2s, color 0.2s',
        fontSize: 14,
        fontWeight: 700
      })}
      onClick={() => handleSelectDate(date)}
    >
      {date}
    </button>
  )
})

export default Date
