"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender["MALE"] = "Male";
    Gender["FEMALE"] = "Female";
    Gender["OTHER"] = "Other";
})(Gender = exports.Gender || (exports.Gender = {}));
var Employee = /** @class */ (function () {
    function Employee(fullName, sex, dob, email, mobile) {
        this._fullName = fullName;
        this._sex = sex;
        this._dob = dob;
        this._email = email;
        this._mobile = mobile;
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (value) {
            this._fullName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "sex", {
        get: function () {
            return this._sex;
        },
        set: function (value) {
            this._sex = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "dob", {
        get: function () {
            return this._dob;
        },
        set: function (value) {
            this._dob = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "mobile", {
        get: function () {
            return this._mobile;
        },
        set: function (value) {
            this._mobile = value;
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.display = function () {
        console.log("".concat(this.fullName, " ").concat(this.sex, " ").concat(this.dob.toDateString(), " ").concat(this.email, " ").concat(this.mobile));
    };
    return Employee;
}());
exports.Employee = Employee;
