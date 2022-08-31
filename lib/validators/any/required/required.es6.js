import { ValidationErrors } from '../../../validation/constants.es6.js';

function required(value, key) {
    if (!value && typeof value !== 'number') {
        return {
            error: ValidationErrors.required,
            data: { key },
        };
    }
}

export { required };
