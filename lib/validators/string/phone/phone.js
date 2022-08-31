'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var constants = require('../../../validation/constants.js');

var PHONE = /\+7 \(9[0-9]{2}\) [0-9]{3}-[0-9]{2}-[0-9]{2}/;
function phone(value, key) {
    if (!value)
        return;
    if (!PHONE.test(value)) {
        return {
            error: constants.ValidationErrors.phone,
            data: {
                key: key,
            },
        };
    }
}

exports.phone = phone;
