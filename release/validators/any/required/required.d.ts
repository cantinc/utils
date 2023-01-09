import { ValidationResponse, Validator } from '../../../validation';
export declare function required<D, K extends keyof D>(validators?: Validator<Required<D>, K>[]): ((value: Exclude<D[K], undefined | null | '' | false | []>, key: K, values: D) => ValidationResponse<K>)[];
