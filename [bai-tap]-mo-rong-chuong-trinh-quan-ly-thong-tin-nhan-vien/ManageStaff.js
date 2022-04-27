"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("./Employee");
var staff1 = new Employee_1.Employee("Lê Thế Khương", Employee_1.Gender.MALE, new Date(1995, 10, 21), "khuong.kyuubi@gmail.com", 984637485);
var staff2 = new Employee_1.Employee("Lê Thế Khương", Employee_1.Gender.MALE, new Date(1995, 10, 21), "khuong.kyuubi@gmail.com", 984637485);
var staff3 = new Employee_1.Employee("Lê Thế Khương", Employee_1.Gender.MALE, new Date(1995, 10, 21), "khuong.kyuubi@gmail.com", 984637485);
var listStaff = [];
listStaff.push(staff1, staff2, staff3);
for (var _i = 0, listStaff_1 = listStaff; _i < listStaff_1.length; _i++) {
    var staff = listStaff_1[_i];
    staff.display();
}
function addStaff(staff) {
    listStaff.push(staff);
}
function deleteStaff(index) {
    listStaff.splice(index, 1);
}
console.log(staff1.dob.toDateString());
