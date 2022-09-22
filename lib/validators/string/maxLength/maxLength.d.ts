import { ValidationResponse } from '../../../validation';
export interface MaxLengthValidationError {
    max: number;
}
export declare function maxLength<K>(max: number): (value: string, key: K) => ValidationResponse<K, MaxLengthValidationError>;
