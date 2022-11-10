'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var PLACEHOLDER_REG = /{([a-zA-Z0-9]+)}/g;
function placeholder(text, data) {
    return text.replace(PLACEHOLDER_REG, function (placeholder, placeholderId) { var _a; return (_a = data[placeholderId]) !== null && _a !== void 0 ? _a : placeholder; });
}

exports.PLACEHOLDER_REG = PLACEHOLDER_REG;
exports.placeholder = placeholder;
