import '../../../validation/index.mjs';
import { ValidationErrors } from '../../../validation/constants.mjs';

function maxLength(max) {
    return function (value, key) {
        if (value.length > max) {
            return {
                error: ValidationErrors.maxLength,
                data: {
                    key,
                    max,
                },
            };
        }
    };
}

export { maxLength };
