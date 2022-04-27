import {Employee, Gender} from "./Employee";

let staff1 = new Employee("Lê Thế Khương", Gender.MALE, new Date(1995, 10, 21), "khuong.kyuubi@gmail.com", 984637485);
let staff2 = new Employee("Lê Thế Khương", Gender.MALE, new Date(1995, 10, 21), "khuong.kyuubi@gmail.com", 984637485);
let staff3 = new Employee("Lê Thế Khương", Gender.MALE, new Date(1995, 10, 21), "khuong.kyuubi@gmail.com", 984637485)

let listStaff: Employee[] = [];

listStaff.push(staff1, staff2, staff3)

for (const staff of listStaff) {
    staff.display();
}

function addStaff(staff: Employee) {
    listStaff.push(staff)
}

function deleteStaff(index): void {
    listStaff.splice(index, 1);
}

console.log(staff1.dob.toDateString())