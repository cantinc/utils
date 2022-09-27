import { ValidationErrors } from '../../../validation/constants.es6.js';

const URL = /^http(s)?:\/\/?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
function url(value, key) {
    if (!URL.test(value)) {
        return {
            error: ValidationErrors.url,
            data: {
                key,
            },
        };
    }
}

export { url };
