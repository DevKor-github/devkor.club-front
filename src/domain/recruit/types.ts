import { Track } from '@/types/track'

export type RecruitConfig = {
  applicationPeriod: {
    start: Date
    end: Date
  }
  documentResultAnnouncement: Date
  interview: {
    start: Date
    end: Date
    timeSlots: string[]
  }
  finalResultAnnouncement: Date
  isApplicationPeriodOpen: boolean
  isInterviewPeriodOpen: boolean
}

export type RecruitQuestion = {
  questions: string[]
}

export type ApplicationFormRequest = {
  name: string
  email: string
  phone: string
  major: string
  position: Track
  studentId: string
  interviewTime: string[]
  answer: Record<string, string>
}
