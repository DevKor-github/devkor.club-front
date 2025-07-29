/**
 * 공통 응답 타입
 * @template T 응답 데이터 타입
 */
export type CommonResponse<T> = {
  data: T
  message: string
  status: number
}
