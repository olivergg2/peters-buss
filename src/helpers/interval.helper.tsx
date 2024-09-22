export default function useInterval(
  handler: TimerHandler,
  delay: number = 1000
) {
  let interval!: number

  const start = () => (interval = setInterval(handler, delay))
  const clear = () => clearInterval(interval)

  const reset = () => {
    clear()
    start()
  }

  return { start, clear, reset }
}
