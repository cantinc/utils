function validation(map, data) {
    for (const key in map) {
        for (const validator of map[key]) {
            const error = validator(data[key], key, data);
            if (error) {
                return error;
            }
        }
    }
}

export { validation };
