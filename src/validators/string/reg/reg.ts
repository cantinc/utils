import { ValidationErrors, ValidationResponse } from '../../../validation'

export interface RegValidationData {
  regId?: any
}

export function reg (reg: RegExp, regId?: any) {
  return function (value: string | undefined, key: string): ValidationResponse<RegValidationData> {
    if (!value) return

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
