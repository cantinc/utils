'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var constants = require('../../../validation/constants.js');

function reg(reg) {
    return function (value, key) {
        if (!value)
            return;
        if (!reg.test(value)) {
            return {
                error: constants.ValidationErrors.reg,
                data: {
                    key: key,
                },
            };
        }
    };
}

exports.reg = reg;
