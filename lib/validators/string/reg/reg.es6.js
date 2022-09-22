import { ValidationErrors } from '../../../validation/constants.es6.js';

function reg(reg, regId) {
    return function (value, key) {
        if (!reg.test(value)) {
            return {
                error: ValidationErrors.reg,
                data: {
                    key,
                    regId,
                },
            };
        }
    };
}

export { reg };
