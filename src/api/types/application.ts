export interface ApplyBase {
  name: string
  email: string
  phone: string
  major: string
  studentId: string
  interviewTime: number
}

export interface FeApplicationRequest extends ApplyBase {
  answer1: string
  answer2: string
  answer3: string
  answer4: string
  answer5: string
  answer6: string
  answer7: string
  answer8?: string
}

export interface BeApplicationRequest extends ApplyBase {
  answer1: string
  answer2: string
  answer3: string
  answer4: string
  answer5: string
  answer6: string
  answer7: string
  answer8: string
  answer9?: string
}

export interface DeApplicationRequest extends ApplyBase {
  answer1: string
  answer2: string
  answer3: string
  answer4: string
  answer5: string
  answer6: string
  answer7: string
}

export interface PmApplicationRequest extends ApplyBase {
  answer1: string
  answer2: string
  answer3: string
  answer4: string
  answer5?: string
}
