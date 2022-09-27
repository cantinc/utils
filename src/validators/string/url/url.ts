import { ValidationErrors, ValidationResponse } from '../../../validation'

const URL = /^http(s)?:\/\/?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/

export function url <K> (value: string, key: K): ValidationResponse<K> {
  if (!URL.test(value)) {
    return {
      error: ValidationErrors.url,
      data: {
        key,
      },
    }
  }
}
