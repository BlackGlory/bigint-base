import { assert } from '@blackglory/prelude'
import { toSet } from 'iterable-operator'

export function validateAlphabet(alphabet: string): void {
  assert(alphabet.length >= 2, 'The alphabet must have at least two characters')
  assert(toSet(alphabet).size === alphabet.length, 'The alphabet must contain only unique characters')
}
