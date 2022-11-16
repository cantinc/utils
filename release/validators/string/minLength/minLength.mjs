import '../../../validation/index.mjs';
import { ValidationErrors } from '../../../validation/constants.mjs';

function minLength(min) {
    return function (value, key) {
        if (value.length < min) {
            return {
                error: ValidationErrors.minLength,
                data: {
                    key,
                    min,
                },
            };
        }
    };
}

export { minLength };
