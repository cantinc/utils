import { ValidationErrors, ValidationResponse, Validator } from '../../../validation'

export function required <D, K extends keyof D> (validators?: Validator<Required<D>, K>[]) {
  return [async (value: Exclude<D[K], undefined | null | '' | false>, key: K, values: D): Promise<ValidationResponse<K>> => {
    if (!value && typeof value !== 'number') {
      return {
        error: ValidationErrors.required,
        data: { key },
      }
    }

    if (validators) {
      for (let i = 0; i < validators.length; i++) {
        const error = await validators[i](value, key, values as any)

        if (error) {
          return error
        }
      }
    }
  }]
}
