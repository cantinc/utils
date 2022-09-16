import { ValidationErrors } from '../../../validation/constants.es6.js';

function reg(reg) {
    return function (value, key) {
        if (!value)
            return;
        if (!reg.test(value)) {
            return {
                error: ValidationErrors.reg,
                data: {
                    key,
                },
            };
        }
    };
}

export { reg };
