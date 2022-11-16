import { ValidationErrors } from './constants';
export interface ValidationErrorData<K> {
    key: K;
}
export interface ValidationError<K, D = {}> {
    error: ValidationErrors | string;
    data: ValidationErrorData<K> & D;
}
export type ValidationResponse<K, D = {}> = ValidationError<K, D> | undefined | void;
export type Validator<D, K extends keyof D, E = {}> = (value: D[K], key: K, data: D) => ValidationResponse<K, E> | Promise<ValidationResponse<K, E>>;
export type ValidationMap<D> = {
    [K in keyof D]?: Validator<D, K>[];
};
