import '../../../validation/index.mjs';
import { ValidationErrors } from '../../../validation/constants.mjs';

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
