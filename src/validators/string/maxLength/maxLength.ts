import { ValidationErrors, ValidationResponse } from '../../../validation'

export interface MaxLengthValidationError {
  max: number
}

export function maxLength <K> (max: number) {
  return function (value: string, key: K): ValidationResponse<K, MaxLengthValidationError> {
    if (value.length > max) {
      return {
        error: ValidationErrors.maxLength,
        data: {
          key,
          max,
        },
      }
    }
  }
}
