'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../validation/index.js');
var constants = require('../../../validation/constants.js');

function maxLength(max) {
    return function (value, key) {
        if (value.length > max) {
            return {
                error: constants.ValidationErrors.maxLength,
                data: {
                    key,
                    max,
                },
            };
        }
    };
}

exports.maxLength = maxLength;
