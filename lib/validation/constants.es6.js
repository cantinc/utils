var ValidationErrors;
(function (ValidationErrors) {
    ValidationErrors[ValidationErrors["required"] = 0] = "required";
    ValidationErrors[ValidationErrors["email"] = 1] = "email";
    ValidationErrors[ValidationErrors["inn"] = 2] = "inn";
    ValidationErrors[ValidationErrors["phone"] = 3] = "phone";
    ValidationErrors[ValidationErrors["minLength"] = 4] = "minLength";
    ValidationErrors[ValidationErrors["maxLength"] = 5] = "maxLength";
})(ValidationErrors || (ValidationErrors = {}));

export { ValidationErrors };
