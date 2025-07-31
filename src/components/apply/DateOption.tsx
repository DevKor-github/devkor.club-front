import { css } from '@styled-stytem/css'
import { AnimatePresence, motion } from 'motion/react'
import { memo, useState } from 'react'

import Checked from '@/assets/Checked.svg'
import Unchecked from '@/assets/Unchecked.svg'

interface DateOptionProps {
  index: string
  dateOption: string
  selected: boolean
  handleSelectInterviewTime: (index: string) => void
}
const DateOption = memo(({ index, dateOption, selected, handleSelectInterviewTime }: DateOptionProps) => {
  const [hover] = useState(false)

  return (
    <button
      className={css({
        display: 'flex',
        w: 'full',
        pos: 'relative',
        maxW: 820,
        h: '44px',
        px: 30,
        py: '10px',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'stretch',
        rounded: 30,
        border: '1.5px solid {colors.label.98}',
        bgColor: 'label.BG',
        _hover: { bgColor: 'label.98' },
        transition: 'background-color 0.3s ease-in-out',
        cursor: 'pointer',
        gap: 2.5
      })}
      onClick={e => {
        e.preventDefault()
        handleSelectInterviewTime(index)
      }}
    >
      <AnimatePresence>
        {!hover && (
          <motion.img
            key={`unchecked-${index}`}
            src={Unchecked}
            alt="unchecked"
            className={css({ w: '26px', pos: 'absolute' })}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}

        {!hover && selected && (
          <motion.img
            key={`checked-${index}`}
            src={Checked}
            alt="unchecked"
            className={css({ w: '26px', pos: 'absolute' })}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
      <p
        className={css({
          fontSize: 14,
          fontWeight: 600,
          color: 'label.50/50',
          ml: 10
        })}
      >
        {dateOption}
      </p>
    </button>
  )
})

export default DateOption
