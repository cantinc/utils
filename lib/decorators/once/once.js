'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function once(target, prop, desc) {
    var _a;
    var key = Symbol(prop);
    var descKey = desc.get ? 'get' : 'value';
    var fn = desc.get || desc.value;
    var descValue = function () {
        return key in this ? this[key] : (this[key] = fn.apply(this, arguments));
    };
    return Object.assign((_a = {},
        _a[descKey] = descValue,
        _a), desc);
}

exports.once = once;
