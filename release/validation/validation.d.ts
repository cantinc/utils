import { ValidationMap, ValidationResponse } from './types';
export declare function validation<D extends object, E extends object>(map: ValidationMap<D>, data: D): Promise<ValidationResponse<E>>;
