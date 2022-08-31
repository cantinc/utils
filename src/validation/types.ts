import { ValidationErrors } from './constants'

export interface ValidationErrorData {
  key: string
}

export interface ValidationError <D extends object = {}> {
  error: ValidationErrors
  data: ValidationErrorData & D
}

export type ValidationResponse <D extends object = {}> = ValidationError<D> | undefined | void

export type Validator<D extends object, K extends keyof D, E extends object = {}> = (value: D[K], key: K, data: D) => ValidationResponse<E> | Promise<ValidationResponse<E>>

export type ValidationMap<D extends object> = {
  [K in keyof D]?: Validator<D, K>[]
}
