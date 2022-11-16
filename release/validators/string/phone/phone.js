'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../validation/index.js');
var constants = require('../../../validation/constants.js');

const PHONE = /\+7 \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}/;
function phone(value, key) {
    if (!PHONE.test(value)) {
        return {
            error: constants.ValidationErrors.phone,
            data: {
                key,
            },
        };
    }
}

exports.phone = phone;
