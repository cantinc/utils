'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');

function validation(map, data) {
    return tslib.__awaiter(this, void 0, void 0, function* () {
        for (const key in map) {
            for (const validator of map[key]) {
                const error = yield validator(data[key], key, data);
                if (error) {
                    return error;
                }
            }
        }
    });
}

exports.validation = validation;
