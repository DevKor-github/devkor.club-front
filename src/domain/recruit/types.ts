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
