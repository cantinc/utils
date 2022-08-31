import { ValidationErrors } from '../../../validation/constants.es6.js';

const offsets = [2, 4, 10, 3, 5, 9, 4, 6, 8];
function inn(value, key) {
    if (!value)
        return;
    if (value.length !== 10) {
        return {
            error: ValidationErrors.inn,
            data: { key, length: 10 },
        };
    }
    let result = 0;
    for (let i = 0; i < 9; i++) {
        result += Number(value[i]) * offsets[i];
    }
    const dif = result - (((result / 11) | 0) * 11);
    if (dif !== Number(value[9])) {
        return {
            error: ValidationErrors.inn,
            data: { key },
        };
    }
}

export { inn };
