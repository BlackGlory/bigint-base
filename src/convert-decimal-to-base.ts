import { assert } from '@blackglory/prelude'
import { validateAlphabet } from './utils.js'

export function convertDecimalToBase(alphabet: string, val: bigint): string
export function convertDecimalToBase(alphabet: string): (val: bigint) => string
export function convertDecimalToBase(...args:
| [alphabet: string, val: bigint]
| [alphabet: string]
) {
  if (args.length === 1) {
    const [alphabet] = args
    validateAlphabet(alphabet)

    return (val: bigint) => _convertDecimalToBase(alphabet, val)
  }

  const [alphabet, val] = args
  validateAlphabet(alphabet)

  return _convertDecimalToBase(alphabet, val)
}

function _convertDecimalToBase(alphabet: string, val: bigint): string {
  validateVal(val)

  const base = BigInt(alphabet.length)
  const result: string[] = []

  let temp = val
  do {
    const remainder = Number(temp % base)
    result.push(alphabet[remainder])
  } while ((temp = temp / base) !== 0n)

  return result
    .reverse()
    .join('')
}

function validateVal(val: bigint): void {
  assert(val >= 0, 'The val must be greater than or equal to 0')
}
