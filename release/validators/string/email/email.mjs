import '../../../validation/index.mjs';
import { ValidationErrors } from '../../../validation/constants.mjs';

const EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function email(value, key) {
    if (!EMAIL.test(value)) {
        return {
            error: ValidationErrors.email,
            data: {
                key,
            },
        };
    }
}

export { email };
