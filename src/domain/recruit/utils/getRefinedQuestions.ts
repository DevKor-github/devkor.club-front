/**
 * 질문을 받아서 글자수 안내 텍스트가 제거된 질문과 글자수 안내 여부를 반환합니다.
 * @param questions 질문 배열
 * @returns 질문과 글자수 안내 여부를 반환합니다.
 */
export const getRefinedQuestions = (questions: string[]) => {
  return questions.map(question => {
    const hasLimit = /\(\d+자\s*내외\)/.test(question)
    return { question: question.replace(/\(\d+자\s*내외\)/, ''), limit: hasLimit }
  })
}
