import { ValidationErrors } from '../../../validation/constants.es6.js';

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
