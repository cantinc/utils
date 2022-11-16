'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
require('../../../validation/index.js');
var constants = require('../../../validation/constants.js');

function required(validators) {
    return [(value, key, values) => tslib.__awaiter(this, void 0, void 0, function* () {
            if (!value && typeof value !== 'number') {
                return {
                    error: constants.ValidationErrors.required,
                    data: { key },
                };
            }
            if (validators) {
                for (let i = 0; i < validators.length; i++) {
                    const error = yield validators[i](value, key, values);
                    if (error) {
                        return error;
                    }
                }
            }
        })];
}

exports.required = required;
