import { atomWithReset } from 'jotai/utils'

export const selectedDate = atomWithReset(24)

export const selectedTimes = atomWithReset([
  { selected: false },
  { selected: false },
  { selected: false },
  { selected: false },
  { selected: false },
  { selected: false },
  { selected: false },
  { selected: false },
  { selected: false },
  { selected: false },
  { selected: false },
  { selected: false },
  { selected: false },
  { selected: false },
  { selected: false },
  { selected: false },
  { selected: false },
  { selected: false },
  { selected: false },
  { selected: false }
])
