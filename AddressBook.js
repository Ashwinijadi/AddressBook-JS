//AddressBook Programming
console.log("Welcome to addressBook programming");

//UC1
class Contact {

    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;
    //constructors
    constructor(...parameter) {
        this.firstName = parameter[0];
        this.lastName = parameter[1];
        this.address = parameter[2];
        this.city = parameter[3];
        this.state = parameter[4];
        this.zip = parameter[5];
        this.phoneNumber = parameter[6];
        this.email = parameter[7];
    }
}
let contact1 = new Contact("Ashwini", "Jadi", "dskr", "Hyderabad", "Telangana", 500025, 7899963310, "ashu@gmail.com");
console.log(contact1); 
