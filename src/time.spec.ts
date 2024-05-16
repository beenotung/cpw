import { expect } from 'chai'
import { formatDuration } from './time'

it('should format sub-second', () => {
  expect(formatDuration(0.9)).to.equals('Instantly')
})

it('should format a second', () => {
  expect(formatDuration(1)).to.equals('1 Second')
})

it('should format multiple seconds', () => {
  expect(formatDuration(30)).to.equals('30 Seconds')
})

it('should format multiple sub-seconds', () => {
  expect(formatDuration(30.5)).to.equals('30.5 Seconds')
})

it('should format a minute', () => {
  expect(formatDuration(60)).to.equals('1 Minute')
})

it('should format multiple minutes', () => {
  expect(formatDuration(90)).to.equals('1.5 Minutes')
})

it('should format a hour', () => {
  expect(formatDuration(3600)).to.equals('1 Hour')
})

it('should format multiple hours', () => {
  expect(formatDuration(3600 * 2)).to.equals('2 Hours')
})
