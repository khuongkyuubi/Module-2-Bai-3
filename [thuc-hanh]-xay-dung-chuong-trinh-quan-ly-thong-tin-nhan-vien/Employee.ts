export enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE",
    OTHER = "OTHER"
}

export class Employee {
    fullName: string;
    gender: Gender = Gender.OTHER;
    birthDay?: Date;
    email: string = "";
    phoneNumber: string = "";

    constructor(fullName: string, gender: Gender, birthDay: Date, email: string, phoneNumber: string) {
        this.fullName = fullName;
        this.gender = gender;
        this.birthDay = birthDay;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

}