import { describe, test, expect } from 'vitest'
import { getError } from 'return-style'
import { convertBaseToDecimal } from '@src/convert-base-to-decimal.js'

describe('convertBaseToDecimal', () => {
  describe('(alphabet: string, val: string): bigint', () => {
    test('general', () => {
      const hexAlphabet = '0123456789abcdef'

      const result = convertBaseToDecimal(hexAlphabet, '10')

      expect(result).toBe(16n)
    })

    test('edge: empty alphabet', () => {
      const alphabet = ''

      const error = getError(() => convertBaseToDecimal(alphabet, '10'))

      expect(error).toBeInstanceOf(Error)
    })
  })

  describe('(alphabet: string): (val: string) => bigint', () => {
    test('general', () => {
      const hexAlphabet = '0123456789abcdef'

      const result = convertBaseToDecimal(hexAlphabet)('10')

      expect(result).toBe(16n)
    })

    test('edge: empty alphabet', () => {
      const alphabet = ''

      const error = getError(() => convertBaseToDecimal(alphabet))

      expect(error).toBeInstanceOf(Error)
    })
  })
})
