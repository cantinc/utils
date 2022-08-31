import { ValidationErrors, ValidationResponse } from '../../../validation'

export function required (value: any, key: string): ValidationResponse {
  if (!value && typeof value !== 'number') {
    return {
      error: ValidationErrors.required,
      data: { key },
    }
  }
}
