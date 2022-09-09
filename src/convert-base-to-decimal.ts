export function convertBaseToDecimal(alphabet: string, val: string): bigint
export function convertBaseToDecimal(alphabet: string): (val: string) => bigint
export function convertBaseToDecimal(...args:
| [alphabet: string, val: string]
| [alphabet: string]
) {
  if (args.length === 1) {
    const [alphabet] = args
    return (val: string) => convertBaseToDecimal(alphabet, val)
  }

  const [alphabet, val] = args
  const base = BigInt(alphabet.length)

  let accumulator = 0n
  for (let i = val.length; i--;) {
    const char = val[i]
    const indexOfAlphabet = alphabet.indexOf(char)
    const currentValue = BigInt(indexOfAlphabet) * (base ** BigInt(val.length - i - 1))
    accumulator += currentValue
  }
  return accumulator
}
