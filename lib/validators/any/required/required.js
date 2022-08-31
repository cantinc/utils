'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var constants = require('../../../validation/constants.js');

function required(value, key) {
    if (!value && typeof value !== 'number') {
        return {
            error: constants.ValidationErrors.required,
            data: { key: key },
        };
    }
}

exports.required = required;
