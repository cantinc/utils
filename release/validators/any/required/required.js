'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../validation/index.js');
var constants = require('../../../validation/constants.js');

function required(validators) {
    return [(value, key, values) => {
            if (Array.isArray(value) ? !value.length : !value && typeof value !== 'number') {
                return {
                    error: constants.ValidationErrors.required,
                    data: { key },
                };
            }
            if (validators) {
                for (let i = 0; i < validators.length; i++) {
                    const error = validators[i](value, key, values);
                    if (error) {
                        return error;
                    }
                }
            }
        }];
}

exports.required = required;
