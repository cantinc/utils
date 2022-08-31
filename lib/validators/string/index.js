'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var email = require('./email/email.js');
var inn = require('./inn/inn.js');
var phone = require('./phone/phone.js');
var minLength = require('./minLength/minLength.js');
var maxLength = require('./maxLength/maxLength.js');



exports.email = email.email;
exports.inn = inn.inn;
exports.phone = phone.phone;
exports.minLength = minLength.minLength;
exports.maxLength = maxLength.maxLength;
