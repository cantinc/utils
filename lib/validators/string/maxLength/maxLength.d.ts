import { ValidationResponse } from '../../../validation';
export interface MaxLengthValidationError {
    max: number;
}
export declare function maxLength(max: number): (value: string | undefined, key: string) => ValidationResponse<MaxLengthValidationError>;
