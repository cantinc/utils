import '../../../validation/index.es6.js';
import { ValidationErrors } from '../../../validation/constants.es6.js';

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
