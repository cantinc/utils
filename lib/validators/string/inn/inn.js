'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var constants = require('../../../validation/constants.js');

var offsets = [2, 4, 10, 3, 5, 9, 4, 6, 8];
function inn(value, key) {
    if (!value)
        return;
    if (value.length !== 10) {
        return {
            error: constants.ValidationErrors.inn,
            data: { key: key, length: 10 },
        };
    }
    var result = 0;
    for (var i = 0; i < 9; i++) {
        result += Number(value[i]) * offsets[i];
    }
    var dif = result - (((result / 11) | 0) * 11);
    if (dif !== Number(value[9])) {
        return {
            error: constants.ValidationErrors.inn,
            data: { key: key },
        };
    }
}

exports.inn = inn;
