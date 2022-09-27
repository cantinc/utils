'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var constants = require('../../../validation/constants.js');

var URL = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/g;
function url(value, key) {
    if (!URL.test(value)) {
        return {
            error: constants.ValidationErrors.url,
            data: {
                key: key,
            },
        };
    }
}

exports.url = url;
