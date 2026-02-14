import { convertDecimalToBase } from './convert-decimal-to-base.js'
import { convertBaseToDecimal } from './convert-base-to-decimal.js'

export function convertBaseToBase(
  srcAlphabet: string
, destAlphabet: string
, val: string
): string
export function convertBaseToBase(
  srcAlphabet: string
, destAlphabet: string
): (val: string) => string
export function convertBaseToBase(...args:
| [srcAlphabet: string, destAlphabet: string, val: string]
| [srcAlphabet: string, destAlphabet: string]
) {
  if (args.length === 2) {
    const [srcAlphabet, destAlphabet] = args
    return (val: string) => convertBaseToBase(srcAlphabet, destAlphabet, val)
  }

  const [srcAlphabet, destAlphabet, val] = args
  return convertDecimalToBase(destAlphabet, convertBaseToDecimal(srcAlphabet, val))
}
