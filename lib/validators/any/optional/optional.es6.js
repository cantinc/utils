import { __awaiter } from '../../../_virtual/_tslib.es6.js';

function optional(validators) {
    return [(value, key, values) => __awaiter(this, void 0, void 0, function* () {
            if (value === undefined || value === null) {
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

export { optional };
