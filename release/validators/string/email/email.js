'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../validation/index.js');
var constants = require('../../../validation/constants.js');

const EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function email(value, key) {
    if (!EMAIL.test(value)) {
        return {
            error: constants.ValidationErrors.email,
            data: {
                key,
            },
        };
    }
}

exports.email = email;
