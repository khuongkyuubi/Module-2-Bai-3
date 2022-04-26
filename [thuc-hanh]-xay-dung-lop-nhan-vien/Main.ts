import {Staff} from "./Staff";

let staff = new Staff("Staff 1", "satff@gamil.com", 20);
let nameStaff = staff.getName()
console.log(nameStaff);
staff.setName("Staff 2");
let currentName = staff.getName();
console.log(currentName);
console.log(staff.getAge());
