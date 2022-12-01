import { __awaiter } from 'tslib';
import '../../../validation/index.es6.js';
import { ValidationErrors } from '../../../validation/constants.es6.js';

function required(validators) {
    return [(value, key, values) => __awaiter(this, void 0, void 0, function* () {
            if (!value && typeof value !== 'number') {
                return {
                    error: ValidationErrors.required,
                    data: { key },
                };
            }
            if (validators) {
                for (let i = 0; i < validators.length; i++) {
                    const error = yield validators[i](value, key, values);
                    if (error) {
                        return error;
                    }
                }
            }
        })];
}

export { required };