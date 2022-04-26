"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender["MALE"] = "MALE";
    Gender["FEMALE"] = "FEMALE";
    Gender["OTHER"] = "OTHER";
})(Gender = exports.Gender || (exports.Gender = {}));
var Employee = /** @class */ (function () {
    function Employee(fullName, gender, birthDay, email, phoneNumber) {
        this.gender = Gender.OTHER;
        this.email = "";
        this.phoneNumber = "";
        this.fullName = fullName;
        this.gender = gender;
        this.birthDay = birthDay;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
    return Employee;
}());
exports.Employee = Employee;
