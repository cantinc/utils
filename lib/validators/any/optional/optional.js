'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../_virtual/_tslib.js');

function optional(validators) {
    var _this = this;
    return [function (value, key, values) { return _tslib.__awaiter(_this, void 0, void 0, function () {
            var i, error;
            return _tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (value === undefined || value === null) {
                            return [2 /*return*/];
                        }
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < validators.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, validators[i](value, key, values)];
                    case 2:
                        error = _a.sent();
                        if (error) {
                            return [2 /*return*/, error];
                        }
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        }); }];
}

exports.optional = optional;
