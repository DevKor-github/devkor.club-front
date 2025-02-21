import { atomWithReset } from 'jotai/utils'

export const selectedDate = atomWithReset(24)

export const selectedTimes = atomWithReset([...Array(21)].map(() => ({ selected: false })))
