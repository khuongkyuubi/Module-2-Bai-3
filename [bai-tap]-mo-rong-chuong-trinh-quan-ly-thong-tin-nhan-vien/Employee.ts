export enum Gender {
    MALE = "Male",
    FEMALE = "Female",
    OTHER = "Other"
}
export class Employee {
    private _fullName: string;
    private _sex: Gender;
    private _dob: Date;
    private _email: string;
    private _mobile: number;


    constructor(fullName: string, sex: Gender, dob: Date, email: string, mobile: number) {
        this._fullName = fullName;
        this._sex = sex;
        this._dob = dob;
        this._email = email;
        this._mobile = mobile;
    }


    get fullName(): string {
        return this._fullName;
    }

    set fullName(value: string) {
        this._fullName = value;
    }

    get sex(): Gender {
        return this._sex;
    }

    set sex(value: Gender) {
        this._sex = value;
    }

    get dob(): Date {
        return this._dob;
    }

    set dob(value: Date) {
        this._dob = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get mobile(): number {
        return this._mobile;
    }

    set mobile(value: number) {
        this._mobile = value;
    }

    display(): void {
        console.log(`${this.fullName} ${this.sex} ${this.dob.toDateString()} ${this.email} ${this.mobile}`)
    }
}