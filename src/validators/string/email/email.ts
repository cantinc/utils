import { ValidationErrors, ValidationResponse } from '../../../validation'

const EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export function email (value: string | undefined, key: string): ValidationResponse {
  if (!value) return

  if (!EMAIL.test(value)) {
    return {
      error: ValidationErrors.email,
      data: {
        key,
      },
    }
  }
}
