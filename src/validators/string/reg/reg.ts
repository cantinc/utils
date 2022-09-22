import { ValidationErrors, ValidationResponse } from '../../../validation'

export interface RegValidationData {
  regId?: any
}

export function reg (reg: RegExp, regId?: any) {
  return function <K> (value: string, key: K): ValidationResponse<K, RegValidationData> {
    if (!reg.test(value)) {
      return {
        error: ValidationErrors.reg,
        data: {
          key,
          regId,
        },
      }
    }
  }
}
