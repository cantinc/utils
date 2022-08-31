import { ValidationErrors, ValidationResponse } from '../../../validation'

export interface MinLengthValidationError {
  min: number
}

export function minLength (min: number) {
  return function (value: string | undefined, key: string): ValidationResponse<MinLengthValidationError> {
    if (!value) return

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
