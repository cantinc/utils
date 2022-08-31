'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var constants = require('../../../validation/constants.js');

function maxLength(max) {
    return function (value, key) {
        if (!value)
            return;
        if (value.length > max) {
            return {
                error: constants.ValidationErrors.maxLength,
                data: {
                    key: key,
                    max: max,
                },
            };
        }
    };
}

exports.maxLength = maxLength;
