export let time_names: Array<[threshold: number, name: string]> = []

time_names.push([1, 'Second'])
time_names.push([60, 'Minute'])
time_names.push([60 * 60, 'Hour'])
time_names.push([60 * 60 * 24, 'Day'])
time_names.push([60 * 60 * 24 * 7, 'Week'])
time_names.push([(60 * 60 * 24 * 365.25) / 12, 'Month'])
time_names.push([60 * 60 * 24 * 365.25, 'Year'])
time_names.push([60 * 60 * 24 * 365.25 * 1e2, 'Century'])
time_names.push([60 * 60 * 24 * 365.25 * 1e3, 'Thousand Year'])
time_names.push([60 * 60 * 24 * 365.25 * 1e6, 'Million Year'])
time_names.push([60 * 60 * 24 * 365.25 * 1e9, 'Billion Year'])
time_names.push([60 * 60 * 24 * 365.25 * 1e12, 'Trillion Year'])
time_names.push([60 * 60 * 24 * 365.25 * 1e15, 'Quadrillion Year'])
time_names.push([60 * 60 * 24 * 365.25 * 1e18, 'Quintillion Year'])
time_names.push([60 * 60 * 24 * 365.25 * 1e21, 'Sextillion Year'])
time_names.push([60 * 60 * 24 * 365.25 * 1e24, 'Septillion Year'])
time_names.push([60 * 60 * 24 * 365.25 * 1e27, 'Octillion Year'])
time_names.push([60 * 60 * 24 * 365.25 * 1e30, 'Nonillion Year'])
time_names.push([60 * 60 * 24 * 365.25 * 1e33, 'Decillion Year'])
time_names.push([60 * 60 * 24 * 365.25 * 1e36, 'Undecillion Year'])
time_names.push([60 * 60 * 24 * 365.25 * 1e39, 'Duodecillion Year'])
time_names.push([60 * 60 * 24 * 365.25 * 1e42, 'Tredecillion Year'])
time_names.push([60 * 60 * 24 * 365.25 * 1e45, 'Quattuordecillion Year'])
time_names.push([60 * 60 * 24 * 365.25 * 1e48, 'Quindecillion Year'])
time_names.push([60 * 60 * 24 * 365.25 * 1e51, 'Sexdecillion Year'])
time_names.push([60 * 60 * 24 * 365.25 * 1e54, 'Septendecillion Year'])
time_names.push([60 * 60 * 24 * 365.25 * 1e57, 'Octodecillion Year'])
time_names.push([60 * 60 * 24 * 365.25 * 1e60, 'Novemdecillion Year'])
time_names.push([60 * 60 * 24 * 365.25 * 1e63, 'Vigintillion Year'])
time_names.push([60 * 60 * 24 * 365.25 * 1e303, 'Centillion Year'])

export function formatDuration(seconds: number): string {
  if (seconds < 1) {
    return 'Instantly'
  }
  for (let i = 0; i < time_names.length; i++) {
    let last = time_names[i - 1]
    let [threshold, name] = time_names[i]
    if (seconds == threshold) {
      return 1 + ' ' + name
    }
    if (seconds < threshold) {
      return Math.floor((seconds / last[0]) * 100) / 100 + ' ' + last[1] + 's'
    }
  }
  return seconds + ' Seconds'
}
