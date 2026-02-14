import { describe, test, expect } from 'vitest'
import { convertDecimalToBase } from '@src/convert-decimal-to-base.js'
import { getError } from 'return-style'

describe('convertDecimalToBase', () => {
  describe('(alphabet: string, val: bigint): string', () => {
    test('general', () => {
      const hexAlphabet = '0123456789abcdef'

      const result = convertDecimalToBase(hexAlphabet, 16n)

      expect(result).toBe('10')
    })

    test('edge: bad alphabet', () => {
      const alphabet = '0'

      const error = getError(() => convertDecimalToBase(alphabet, 16n))

      expect(error).toBeInstanceOf(Error)
    })
  })

  describe('(alphabet: string): (val: bigint) => string', () => {
    test('general', () => {
      const hexAlphabet = '0123456789abcdef'

      const result = convertDecimalToBase(hexAlphabet)(16n)

      expect(result).toBe('10')
    })

    test('edge: bad alphabet', () => {
      const alphabet = '0'

      const error = getError(() => convertDecimalToBase(alphabet))

      expect(error).toBeInstanceOf(Error)
    })
  })
})
