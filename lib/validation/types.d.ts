import { ValidationErrors } from './constants';
export interface ValidationErrorData<K> {
    key: K;
}
export interface ValidationError<K, D = {}> {
    error: ValidationErrors;
    data: ValidationErrorData<K> & D;
}
export declare type ValidationResponse<K, D = {}> = ValidationError<K, D> | undefined | void;
export declare type Validator<D, K extends keyof D, E = {}> = (value: D[K], key: K, data: D) => ValidationResponse<K, E> | Promise<ValidationResponse<K, E>>;
export declare type ValidationMap<D> = {
    [K in keyof D]?: Validator<D, K>[];
};
