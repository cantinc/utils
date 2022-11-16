import { ValidationResponse } from '../../../validation';
export interface MinLengthValidationError {
    min: number;
}
export declare function minLength<K>(min: number): (value: string, key: K) => ValidationResponse<K, MinLengthValidationError>;
