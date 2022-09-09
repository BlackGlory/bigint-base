import { convertBaseToBase, convertBaseToDecimal, convertDecimalToBase } from '..'
import { go } from '@blackglory/prelude'
import { Benchmark } from 'extra-benchmark'

const benchmark = new Benchmark('bigint-base', {
  warmUps: 100000
, runs: 100000
})

benchmark.addCase('convertBaseToBase', () => {
  const dec = '0123456789'
  const hex = '0123456789abcdef'

  return () => {
    convertBaseToBase(dec, hex, '16')
  }
})

benchmark.addCase('convertBaseToDecimal', () => {
  const hex = '0123456789abcdef'

  return () => {
    convertBaseToDecimal(hex, '10')
  }
})

benchmark.addCase('convertDecimalToBase', () => {
  const hex = '0123456789abcdef'

  return () => {
    convertDecimalToBase(hex, 16n)
  }
})

go(async () => {
  for await(const result of benchmark.run()) {
    console.log(result)
  }
})
