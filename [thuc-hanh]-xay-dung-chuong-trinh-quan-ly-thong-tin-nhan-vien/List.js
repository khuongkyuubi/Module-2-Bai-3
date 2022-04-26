"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("./Employee");
var Employee_2 = require("./Employee");
var employeeList = [];
employeeList.push(new Employee_2.Employee("Nguyen Van A", Employee_1.Gender.MALE, new Date("1990-09-19"), "anguyen@gmail.com", "0123456789"));
employeeList.push(new Employee_2.Employee("Tran Thi A", Employee_1.Gender.FEMALE, new Date("1991-10-12"), "btran@gmail.com", "0123456790"));
employeeList.push(new Employee_2.Employee("Huynh An Nhien", Employee_1.Gender.OTHER, new Date("1990-09-19"), "nhienhuynh@gmail.com", "0123456791"));
// hàm hiển thị nhân viên
// function showEmployee(employee: Employee) {
//     console.log(employee);
// }
employeeList.forEach(function (employee) {
    console.log(employee);
});
