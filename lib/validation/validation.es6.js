import { __awaiter } from '../_virtual/_tslib.es6.js';

function validation(map, data) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const key in map) {
            for (const validator of map[key]) {
                const error = yield validator(data[key], key, data);
                if (error) {
                    return error;
                }
            }
        }
    });
}

export { validation };
