export function convertDecimalToBase(alphabet: string, val: bigint): string
export function convertDecimalToBase(alphabet: string): (val: bigint) => string
export function convertDecimalToBase(...args:
| [alphabet: string, val: bigint]
| [alphabet: string]
) {
  if (args.length === 1) {
    const [alphabet] = args
    return (val: bigint) => convertDecimalToBase(alphabet, val)
  }

  const [alphabet, val] = args
  const base = BigInt(alphabet.length)
  const result = []

  let temp = val
  do {
    const remainder = Number(temp % base)
    result.push(alphabet[remainder])
  } while ((temp = temp / base) !== 0n)

  return result
    .reverse()
    .join('')
}
