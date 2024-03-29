'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../validation/index.js');
var constants = require('../../../validation/constants.js');

function minLength(min) {
    return function (value, key) {
        if (value.length < min) {
            return {
                error: constants.ValidationErrors.minLength,
                data: {
                    key,
                    min,
                },
            };
        }
    };
}

exports.minLength = minLength;
