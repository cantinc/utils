import { ValidationErrors, ValidationResponse, Validator } from '../../../validation'

export function required <D, K extends keyof D> (validators?: Validator<Required<D>, K>[]) {
  return [(value: Exclude<D[K], undefined | null | '' | false | []>, key: K, values: D): ValidationResponse<K> => {
    if (Array.isArray(value) ? !value.length : !value && typeof value !== 'number') {
      return {
        error: ValidationErrors.required,
        data: { key },
      }
    }

    if (validators) {
      for (let i = 0; i < validators.length; i++) {
        const error = validators[i](value, key, values as any)

        if (error) {
          return error
        }
      }
    }
  }]
}
