'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function once(target, prop, desc) {
    const key = Symbol(prop);
    const descKey = desc.get ? 'get' : 'value';
    const fn = desc.get || desc.value;
    const descValue = function () {
        // @ts-ignore
        return key in this ? this[key] : (this[key] = fn.apply(this, arguments));
    };
    return Object.assign(desc, {
        [descKey]: descValue,
    });
}

exports.once = once;
