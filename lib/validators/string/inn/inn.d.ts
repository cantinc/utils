import { ValidationResponse } from '../../../validation';
export interface InnValidationError {
    length?: number;
}
export declare function inn(value: string | undefined, key: string): ValidationResponse<InnValidationError>;
