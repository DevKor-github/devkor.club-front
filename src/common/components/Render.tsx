type Props<T> = {
  condition: T | undefined | null
  children: T extends undefined | null ? never : React.ReactNode
  fallback?: React.ReactNode
}

const Render = <T,>({ condition, children, fallback }: Props<T>) => {
  if (!condition) return <>{fallback ?? null}</>

  return <>{children}</>
}

export default Render
