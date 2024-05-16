import { expect } from 'chai'
import { countCharset } from './charset'

context('countCharset()', () => {
  it('should count 10 for digits', () => {
    expect(countCharset('42')).to.equals(10)
  })
  context('symbol', () => {
    it('should count 33 for symbols', () => {
      expect(countCharset('.')).to.equals(33)
      expect(countCharset('-')).to.equals(33)
      expect(countCharset('_')).to.equals(33)
    })
    it('should treat space as symbols', () => {
      expect(countCharset(' ')).to.equals(33)
    })
  })
  context('hex', () => {
    it('should count 16 for hex in lower case', () => {
      expect(countCharset('a')).to.equals(16)
      expect(countCharset('a0')).to.equals(16)
    })
    it('should count 16 for hex in upper case', () => {
      expect(countCharset('A')).to.equals(16)
      expect(countCharset('A0')).to.equals(16)
    })
    it('should count 10+6x2 for hex in mixed case', () => {
      expect(countCharset('Aa')).to.equals(10 + 6 * 2)
      expect(countCharset('Aa0')).to.equals(10 + 6 * 2)
    })
  })
  context('alphabets', () => {
    it('should count 26 for alphabets in lower case', () => {
      expect(countCharset('apple')).to.equals(26)
    })
    it('should count 26 for alphabets in upper case', () => {
      expect(countCharset('HI')).to.equals(26)
    })
    it('should count 26x2 for alphabets in mixed case', () => {
      expect(countCharset('Hi')).to.equals(26 * 2)
      expect(countCharset('Aag')).to.equals(26 * 2)
    })
  })
  context('mixed', () => {
    it('should count 32 for digits and alphabets', () => {
      expect(countCharset('g0')).to.equals(26 + 10)
      expect(countCharset('G0')).to.equals(26 + 10)
    })
    it('should count 32+33 for digits and symbols', () => {
      expect(countCharset('0*')).to.equals(10 + 33)
      expect(countCharset('0*')).to.equals(10 + 33)
    })
    it('should count 32+33 for digits, alphabets and symbols', () => {
      expect(countCharset('g0*')).to.equals(26 + 10 + 33)
      expect(countCharset('G0*')).to.equals(26 + 10 + 33)
    })
    it('should count 32+33 for digits, symbols, and alphabets in mixed case', () => {
      expect(countCharset('Gg0*')).to.equals(10 + 33 + 26 + 26)
      expect(countCharset('Ag0*')).to.equals(10 + 33 + 26 + 26)
    })
  })
})
