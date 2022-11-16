import { Validator } from '../../../validation';
export declare function optional<D, K extends keyof D>(validators: Validator<Required<D>, K>[]): Validator<D, K>[];
