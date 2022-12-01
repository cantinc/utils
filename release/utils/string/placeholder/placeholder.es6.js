const PLACEHOLDER_REG = /{([a-zA-Z0-9]+)}/g;
function placeholder(text, data) {
    return text.replace(PLACEHOLDER_REG, (placeholder, placeholderId) => { var _a; return (_a = data[placeholderId]) !== null && _a !== void 0 ? _a : placeholder; });
}

export { PLACEHOLDER_REG, placeholder };
