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

  return val
    .split('')
    .reverse()
    .map(x => alphabet.indexOf(x))
    .map((x, i) => BigInt(x) * (base ** BigInt(i)))
    .reduce((acc, cur) => acc + cur)
}
