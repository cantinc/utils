'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var required = require('./any/required/required.js');
var optional = require('./any/optional/optional.js');
var email = require('./string/email/email.js');
var inn = require('./string/inn/inn.js');
var phone = require('./string/phone/phone.js');
var minLength = require('./string/minLength/minLength.js');
var maxLength = require('./string/maxLength/maxLength.js');
var reg = require('./string/reg/reg.js');



exports.required = required.required;
exports.optional = optional.optional;
exports.email = email.email;
exports.inn = inn.inn;
exports.phone = phone.phone;
exports.minLength = minLength.minLength;
exports.maxLength = maxLength.maxLength;
exports.reg = reg.reg;
