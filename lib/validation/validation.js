'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');

function validation(map, data) {
    return _tslib.__awaiter(this, void 0, void 0, function () {
        var _a, _b, _i, key, _c, _d, validator, error, e_1_1;
        var e_1, _e;
        return _tslib.__generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    _a = [];
                    for (_b in map)
                        _a.push(_b);
                    _i = 0;
                    _f.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 10];
                    key = _a[_i];
                    _f.label = 2;
                case 2:
                    _f.trys.push([2, 7, 8, 9]);
                    _c = (e_1 = void 0, _tslib.__values(map[key])), _d = _c.next();
                    _f.label = 3;
                case 3:
                    if (!!_d.done) return [3 /*break*/, 6];
                    validator = _d.value;
                    return [4 /*yield*/, validator(data[key], key, data)];
                case 4:
                    error = _f.sent();
                    if (error) {
                        return [2 /*return*/, error];
                    }
                    _f.label = 5;
                case 5:
                    _d = _c.next();
                    return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 9];
                case 7:
                    e_1_1 = _f.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 9];
                case 8:
                    try {
                        if (_d && !_d.done && (_e = _c.return)) _e.call(_c);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 9:
                    _i++;
                    return [3 /*break*/, 1];
                case 10: return [2 /*return*/];
            }
        });
    });
}

exports.validation = validation;
