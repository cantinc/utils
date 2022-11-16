'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../validation/index.js');
var constants = require('../../../validation/constants.js');

const URL = /^http(s)?:\/\/?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
function url(value, key) {
    if (!URL.test(value)) {
        return {
            error: constants.ValidationErrors.url,
            data: {
                key,
            },
        };
    }
}

exports.url = url;
