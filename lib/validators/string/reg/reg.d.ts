import { ValidationResponse } from '../../../validation';
export interface RegValidationData {
    regId?: any;
}
export declare function reg(reg: RegExp, regId?: any): (value: string | undefined, key: string) => ValidationResponse<RegValidationData>;
