'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../validation/index.js');
var constants = require('../../../validation/constants.js');

function reg(reg, regId) {
    return function (value, key) {
        if (!reg.test(value)) {
            return {
                error: constants.ValidationErrors.reg,
                data: {
                    key,
                    regId,
                },
            };
        }
    };
}

exports.reg = reg;
