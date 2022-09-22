import { ValidationErrors, ValidationResponse } from '../../../validation'

const offsets = [2, 4, 10, 3, 5, 9, 4, 6, 8]

export interface InnValidationError {
  length?: number
}

export function inn <K> (value: string, key: K): ValidationResponse<K, InnValidationError> {
  if (value.length !== 10) {
    return {
      error: ValidationErrors.inn,
      data: { key, length: 10 },
    }
  }

  let result = 0

  for (let i = 0; i < 9; i++) {
    result += Number(value[i]) * offsets[i]
  }

  const dif = result - (((result / 11) | 0) * 11)

  if (dif % 10 !== Number(value[9])) {
    return {
      error: ValidationErrors.inn,
      data: { key },
    }
  }
}
