import { employType} from "./employI";

export default class Employ {
    private id: number;
    private firstName: string;
    private lastName: string;
    private address: string;
    private phoneNumber: number;
    private DOB: string;
    private email: string;

    constructor(employ: employType) {
        this.id = employ.id
        this.firstName = employ.firstName
        this.lastName = employ.lastName
        this.address = employ.address
        this.phoneNumber = employ.phoneNumber
        this.DOB = employ.DOB
        this.email = employ.email
    }

    get employ(): employType {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName:  this.lastName,
            address: this.address,
            phoneNumber: this.phoneNumber,
            DOB: this.DOB,
            email: this.email
        }
    }
}