'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

exports.ValidationErrors = void 0;
(function (ValidationErrors) {
    ValidationErrors[ValidationErrors["required"] = 0] = "required";
    ValidationErrors[ValidationErrors["email"] = 1] = "email";
    ValidationErrors[ValidationErrors["inn"] = 2] = "inn";
    ValidationErrors[ValidationErrors["phone"] = 3] = "phone";
    ValidationErrors[ValidationErrors["minLength"] = 4] = "minLength";
    ValidationErrors[ValidationErrors["maxLength"] = 5] = "maxLength";
    ValidationErrors[ValidationErrors["reg"] = 6] = "reg";
})(exports.ValidationErrors || (exports.ValidationErrors = {}));
