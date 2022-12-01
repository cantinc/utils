import '../../../validation/index.es6.js';
import { ValidationErrors } from '../../../validation/constants.es6.js';

const PHONE = /\+7 \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}/;
function phone(value, key) {
    if (!PHONE.test(value)) {
        return {
            error: ValidationErrors.phone,
            data: {
                key,
            },
        };
    }
}

export { phone };
