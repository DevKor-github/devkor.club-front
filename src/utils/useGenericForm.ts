import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { backendSchema } from '@/lib/zod/backend-schema'
import { designerSchema } from '@/lib/zod/designer-schema'
import { techSchema } from '@/lib/zod/fontend-schema'
import { pmSchema } from '@/lib/zod/pm-schema'
import { Track } from '@/types/track'

const defaultValues = {
  FE: {
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
    answer5: '',
    answer6: ''
  },
  BE: {
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
    answer5: '',
    answer6: ''
  },
  PM: {
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
    answer5: '',
    answer6: ''
  },
  PD: {
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
    answer5: '',
    answer6: '',
    answer7: ''
  }
}

export const useGenericForm = (track: Track) => {
  const formConfig = {
    FE: {
      resolver: zodResolver(techSchema),
      defaultValues: defaultValues.FE
    },
    BE: {
      resolver: zodResolver(backendSchema),
      defaultValues: defaultValues.BE
    },
    PM: {
      resolver: zodResolver(pmSchema),
      defaultValues: defaultValues.PM
    },
    PD: {
      resolver: zodResolver(designerSchema),
      defaultValues: defaultValues.PD
    }
  }
  const feform = useForm<z.infer<typeof techSchema>>({
    resolver: formConfig[track].resolver,
    defaultValues: formConfig[track].defaultValues,
    mode: 'onBlur'
  })
  const beform = useForm<z.infer<typeof backendSchema>>({
    resolver: formConfig[track].resolver,
    defaultValues: formConfig[track].defaultValues,
    mode: 'onBlur'
  })
  const pmform = useForm<z.infer<typeof pmSchema>>({
    resolver: formConfig[track].resolver,
    defaultValues: formConfig[track].defaultValues,
    mode: 'onBlur'
  })
  const deform = useForm<z.infer<typeof designerSchema>>({
    resolver: formConfig[track].resolver,
    defaultValues: formConfig[track].defaultValues,
    mode: 'onBlur'
  })

  return { feform, beform, pmform, deform }
}
