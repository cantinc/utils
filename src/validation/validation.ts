import { ValidationMap, ValidationResponse } from './types'

export async function validation <D extends object, E extends object> (map: ValidationMap<D>, data: D): Promise<ValidationResponse<E>> {
  for (const key in map) {
    for (const validator of (map as any)[key]) {
      const error = await validator((data as any)[key], key, data)

      if (error) {
        return error
      }
    }
  }
}
