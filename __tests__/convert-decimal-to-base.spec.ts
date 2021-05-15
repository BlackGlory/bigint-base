import { convertDecimalToBase } from '@src/convert-decimal-to-base'

test('convertDecimalToBase(alphabet: string, val: bigint): string', () => {
  const hex = '0123456789abcdef'

  const result = convertDecimalToBase(hex, 16n)

  expect(result).toBe('10')
})

test('convertDecimalToBase(alphabet: string): (val: bigint) => string', () => {
  const hex = '0123456789abcdef'

  const result = convertDecimalToBase(hex)(16n)

  expect(result).toBe('10')
})
