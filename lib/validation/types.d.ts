import { ValidationErrors } from './constants';
export interface ValidationErrorData {
    key: string;
}
export interface ValidationError<D extends object = {}> {
    error: ValidationErrors;
    data: ValidationErrorData & D;
}
export declare type ValidationResponse<D extends object = {}> = ValidationError<D> | undefined | void;
export declare type Validator<D extends object, K extends keyof D, E extends object = {}> = (value: D[K], key: K, data: D) => ValidationResponse<E> | Promise<ValidationResponse<E>>;
export declare type ValidationMap<D extends object> = {
    [K in keyof D]?: Validator<D, K>[];
};
