export let speed = 1e10

let nCpu = 8

export function measureSpeed(): void {
  let start = Date.now()
  let x = 0
  let n = (speed / nCpu) * 2
  while (n > 0) {
    x++
    n--
  }
  let end = Date.now()
  let t = (end - start) / 1000
  speed = Math.ceil((x / t) * nCpu)
}
