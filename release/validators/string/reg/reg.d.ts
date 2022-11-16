import { ValidationResponse } from '../../../validation';
export interface RegValidationData {
    regId?: any;
}
export declare function reg(reg: RegExp, regId?: any): <K>(value: string, key: K) => ValidationResponse<K, RegValidationData>;
