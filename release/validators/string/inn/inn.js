'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../validation/index.js');
var constants = require('../../../validation/constants.js');

const offsets10 = [2, 4, 10, 3, 5, 9, 4, 6, 8];
const offsets12 = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8];
function inn(value, key) {
    if (value.split('').some(symbol => isNaN(Number(symbol)))) {
        return {
            error: constants.ValidationErrors.innNumber,
            data: { key },
        };
    }
    if (value.length !== 10 && value.length !== 12) {
        return {
            error: constants.ValidationErrors.innLength,
            data: { key },
        };
    }
    if (value.length === 10) {
        if (Number(value[9]) !== (value.split('').slice(0, -1)
            .reduce((summ, symbol, index) => offsets10[index] * Number(symbol) + summ, 0) %
            11) % 10) {
            return {
                error: constants.ValidationErrors.inn,
                data: { key },
            };
        }
    }
    else if (value.length === 12) {
        const checkSumOne = (value.split('').slice(0, -2)
            .reduce((summ, symbol, index) => offsets12[index] * Number(symbol) + summ, 0) %
            11) % 10;
        const checkSumTwo = (value.split('').slice(0, -1)
            .reduce((summ, symbol, index) => [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8][index] * Number(symbol) + summ, 0) %
            11) % 10;
        if (checkSumOne !== Number(value[10]) || checkSumTwo !== Number(value[11])) {
            return {
                error: constants.ValidationErrors.inn,
                data: { key },
            };
        }
    }
}

exports.inn = inn;
