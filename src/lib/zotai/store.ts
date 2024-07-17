import { atom } from 'jotai'

export const selectedDate = atom(29)

export const selectedTimes = atom([
  { selected: false },
  { selected: false },
  { selected: false },
  { selected: false },
  { selected: false }
])
