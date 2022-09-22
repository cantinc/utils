import { ValidationErrors, ValidationResponse } from '../../../validation'

export interface MinLengthValidationError {
  min: number
}

export function minLength <K> (min: number) {
  return function (value: string, key: K): ValidationResponse<K, MinLengthValidationError> {
    if (value.length < min) {
      return {
        error: ValidationErrors.minLength,
        data: {
          key,
          min,
        },
      }
    }
  }
}
