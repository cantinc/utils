import { ValidationResponse } from '../../../validation';
export interface InnValidationError {
    length?: number;
}
export declare function inn<K>(value: string, key: K): ValidationResponse<K, InnValidationError>;
