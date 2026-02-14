import { test, expect } from 'vitest'
import { convertBaseToBase } from '@src/convert-base-to-base.js'

test(`
  convertBaseToBase(
    srcAlphabet: string
  , destAlphabet: string
  , val: string
  ): string
`, () => {
  const dec = '0123456789'
  const hex = '0123456789abcdef'

  const result = convertBaseToBase(dec, hex, '16')

  expect(result).toBe('10')
})

test(`
  convertBaseToBase(
    srcAlphabet: string
  , destAlphabet: string
  ): (val: string) => string
`, () => {
  const dec = '0123456789'
  const hex = '0123456789abcdef'

  const result = convertBaseToBase(dec, hex)('16')

  expect(result).toBe('10')
})
