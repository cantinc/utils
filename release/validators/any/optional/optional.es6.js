function optional(validators) {
    return [(value, key, values) => {
            if (value === undefined || value === null || value === '') {
                return;
            }
            for (let i = 0; i < validators.length; i++) {
                const error = validators[i](value, key, values);
                if (error) {
                    return error;
                }
            }
        }];
}

export { optional };
