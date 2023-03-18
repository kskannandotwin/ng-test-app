export class User {
    email: string;
    personName: string;
    password: string;
    mobile: string;
    dateOfBirth: number;
    monthOfBirth: number;
    yearOfBirth: number;
    amount: number;
    receiveNewsLetters: boolean;
    gender: string;
    country: string;

    constructor(email: string, personName: string, password: string, mobile: string, dateOfBirth: number, monthOfBirth: number, yearOfBirth: number, amount: number, receiveNewsLetters: boolean, gender: string, country: string) {
        this.email = email;
        this.personName = personName;
        this.password = password;
        this.mobile = mobile;
        this.dateOfBirth = dateOfBirth;
        this.monthOfBirth = monthOfBirth;
        this.yearOfBirth = yearOfBirth;
        this.amount = amount;
        this.receiveNewsLetters = receiveNewsLetters;
        this.gender = gender;
        this.country = country;
    }
}

