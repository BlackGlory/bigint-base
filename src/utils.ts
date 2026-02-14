import { assert } from '@blackglory/prelude'

export function validateAlphabet(alphabet: string): void {
  assert(alphabet.length >= 2, 'The alphabet must have at least two characters')
}
