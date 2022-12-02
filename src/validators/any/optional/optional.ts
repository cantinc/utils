import { ValidationResponse, Validator } from '../../../validation'

export function optional <D, K extends keyof D> (validators: Validator<Required<D>, K>[]): Validator<D, K>[] {
  return [(value, key, values): ValidationResponse<K> => {
    if (value === undefined || value === null || value === '') {
      return
    }

    for (let i = 0; i < validators.length; i++) {
      const error = validators[i](value, key, values as any)

      if (error) {
        return error
      }
    }
  }]
}
