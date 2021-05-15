# bigint-base
Yet another base conversion library, but using BigInt.

## Install

```sh
npm install --save bigint-base
# or
yarn add bigint-base
```

## Usage

```ts
import { convertDecimalToBase, convertBaseToDecimal } from 'bigint-base'

const hex = '0123456789abcdef'

const decToHex = convertDecimalToBase(hex)
const hexToDec = convertBaseToDecimal(hex)

decToHex(16n) // '10'
hexToDec('10') // 16n
```

## API

### convertDecimalToBase

```ts
function convertDecimalToBase(alphabet: string, val: bigint): string
function convertDecimalToBase(alphabet: string): (val: bigint) => string
```

### convertBaseToDecimal

```ts
function convertBaseToDecimal(alphabet: string, val: string): bigint
function convertBaseToDecimal(alphabet: string): (val: string) => bigint
```

### convertBaseToBase

```ts
function convertBaseToBase(
  srcAlphabet: string
, destAlphabet: string
, val: string
): string
function convertBaseToBase(
  srcAlphabet: string
, destAlphabet: string
): (val: string) => string
```
