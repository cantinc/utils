var ValidationErrors;
(function (ValidationErrors) {
    ValidationErrors["required"] = "required";
    ValidationErrors["email"] = "email";
    ValidationErrors["inn"] = "inn";
    ValidationErrors["innLength"] = "innLength";
    ValidationErrors["innNumber"] = "innNumber";
    ValidationErrors["phone"] = "phone";
    ValidationErrors["url"] = "url";
    ValidationErrors["minLength"] = "minLength";
    ValidationErrors["maxLength"] = "maxLength";
    ValidationErrors["reg"] = "reg";
})(ValidationErrors || (ValidationErrors = {}));

export { ValidationErrors };
