import { assert } from '@blackglory/prelude'

export function validateAlphabet(alphabet: string): void {
  assert(alphabet.length, 'The alphabet must be a non-empty string')
}
