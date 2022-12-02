import { ValidationMap, ValidationResponse } from './types'

export function validation <D extends object, E extends object> (map: ValidationMap<D>, data: D): ValidationResponse<E> {
  for (const key in map) {
    for (const validator of (map as any)[key]) {
      const error = validator((data as any)[key], key, data)

      if (error) {
        return error
      }
    }
  }
}
