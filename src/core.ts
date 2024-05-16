import { countCharset } from './charset'
import { speed } from './speed'
import { formatDuration } from './time'

/**
 * @description calculate the entropy of password
 */
export function cpw(text: string, options?: { tickPerSecond?: number }) {
  let tickPerSecond = options?.tickPerSecond || speed
  let setSize = countCharset(text)
  let difficulty = Math.pow(setSize, text.length)
  let entropy = Math.log2(difficulty)
  let time = difficulty / tickPerSecond
  let timeText = formatDuration(time)
  return {
    tickPerSecond,
    setSize,
    difficulty,
    entropy,
    time,
    timeText,
  }
}