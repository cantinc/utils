import { ValidationResponse } from '../../../validation';
export interface MinLengthValidationError {
    min: number;
}
export declare function minLength(min: number): (value: string | undefined, key: string) => ValidationResponse<MinLengthValidationError>;
