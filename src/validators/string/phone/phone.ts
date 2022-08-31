import { ValidationErrors, ValidationResponse } from '../../../validation'

const PHONE = /\+7 \(9[0-9]{2}\) [0-9]{3}-[0-9]{2}-[0-9]{2}/

export function phone (value: string | undefined, key: string): ValidationResponse {
  if (!value) return

  if (!PHONE.test(value)) {
    return {
      error: ValidationErrors.phone,
      data: {
        key,
      },
    }
  }
}
