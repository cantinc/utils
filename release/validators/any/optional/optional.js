'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');

function optional(validators) {
    return [(value, key, values) => tslib.__awaiter(this, void 0, void 0, function* () {
            if (value === undefined || value === null || value === '') {
                return;
            }
            for (let i = 0; i < validators.length; i++) {
                const error = yield validators[i](value, key, values);
                if (error) {
                    return error;
                }
            }
        })];
}

exports.optional = optional;
