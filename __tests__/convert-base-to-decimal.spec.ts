import { convertBaseToDecimal } from '@src/convert-base-to-decimal'

test('convertBaseToDecimal(alphabet: string, val: string): bigint', () => {
  const hex = '0123456789abcdef'

  const result = convertBaseToDecimal(hex, '10')

  expect(result).toBe(16n)
})

test('convertBaseToDecimal(alphabet: string): (val: string) => bigint', () => {
  const hex = '0123456789abcdef'

  const result = convertBaseToDecimal(hex)('10')

  expect(result).toBe(16n)
})
