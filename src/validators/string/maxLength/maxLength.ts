import { ValidationErrors, ValidationResponse } from '../../../validation'

export interface MaxLengthValidationError {
  max: number
}

export function maxLength (max: number) {
  return function (value: string | undefined, key: string): ValidationResponse<MaxLengthValidationError> {
    if (!value) return

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
