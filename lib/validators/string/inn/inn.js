'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var constants = require('../../../validation/constants.js');

var offsets10 = [2, 4, 10, 3, 5, 9, 4, 6, 8];
var offsets12 = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8];
function inn(value, key) {
    if (value.split('').some(function (symbol) { return isNaN(Number(symbol)); })) {
        return {
            error: constants.ValidationErrors.innNumber,
            data: { key: key },
        };
    }
    if (value.length !== 10 && value.length !== 12) {
        return {
            error: constants.ValidationErrors.innLength,
            data: { key: key },
        };
    }
    if (value.length === 10) {
        if (Number(value[9]) !== (value.split('').slice(0, -1)
            .reduce(function (summ, symbol, index) {
            return offsets10[index] * Number(symbol) + summ;
        }, 0) %
            11) % 10) {
            return {
                error: constants.ValidationErrors.inn,
                data: { key: key },
            };
        }
    }
    else if (value.length === 12) {
        var checkSumOne = (value.split('').slice(0, -2)
            .reduce(function (summ, symbol, index) {
            return offsets12[index] * Number(symbol) + summ;
        }, 0) %
            11) % 10;
        var checkSumTwo = (value.split('').slice(0, -1)
            .reduce(function (summ, symbol, index) {
            return [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8][index] * Number(symbol) + summ;
        }, 0) %
            11) % 10;
        if (checkSumOne !== Number(value[10]) || checkSumTwo !== Number(value[11])) {
            return {
                error: constants.ValidationErrors.inn,
                data: { key: key },
            };
        }
    }
}

exports.inn = inn;
