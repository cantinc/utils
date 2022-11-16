'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const PLACEHOLDER_REG = /{([a-zA-Z0-9]+)}/g;
function placeholder(text, data) {
    return text.replace(PLACEHOLDER_REG, (placeholder, placeholderId) => { var _a; return (_a = data[placeholderId]) !== null && _a !== void 0 ? _a : placeholder; });
}

exports.PLACEHOLDER_REG = PLACEHOLDER_REG;
exports.placeholder = placeholder;
