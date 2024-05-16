import { countCharset } from './charset'
import { speed } from './speed'
import { formatDuration } from './time'

export type CPWResult = {
  /** @description number of attempt per second to estimate time to crack the password */
  tickPerSecond: number

  /** @description number of possible characters, e.g. 10 for digits, 26 for lower case alphabets */
  setSize: number

  /** @description length of password */
  length: number

  /** @description number of possible combinations, i.e. setSize^length */
  difficulty: number

  /** @description number of bits, i.e. log(difficulty) / log(2) */
  entropy: number

  /** @description estimated number of seconds to crack the password */
  seconds: number

  /** @description estimated time to crack the password in human readable format, e.g. "12 Hours" */
  durationText: string
}

/**
 * @description calculate the entropy of password
 */
export function cpw(
  text: string,
  options?: { tickPerSecond?: number },
): CPWResult {
  let tickPerSecond = options?.tickPerSecond || speed
  let setSize = countCharset(text)
  let length = text.length
  let difficulty = Math.pow(setSize, length)
  let entropy = Math.log2(difficulty)
  let seconds = difficulty / tickPerSecond
  let timeText = formatDuration(seconds)
  return {
    tickPerSecond,
    setSize,
    length,
    difficulty,
    entropy,
    seconds,
    durationText: timeText,
  }
}
