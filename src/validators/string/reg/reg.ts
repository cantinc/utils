import { ValidationErrors, ValidationResponse } from '../../../validation'

export function reg (reg: RegExp) {
  return function (value: string | undefined, key: string): ValidationResponse {
    if (!value) return

    if (!reg.test(value)) {
      return {
        error: ValidationErrors.reg,
        data: {
          key,
        },
      }
    }
  }
}
