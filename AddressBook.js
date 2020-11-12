//AddressBook Programming
console.log("Welcome to addressBook programming");

//UC1 Create AddressBook Contacts
const prompt = require('prompt-sync')();
const nameRegex = RegExp('^[A-Z]{1}[A-Za-z]{2,}$');
const addressRegex = RegExp('^[A-Za-z0-9/,]{4,}$');
const cityRegex = RegExp('^[A-Za-z]{4,}$');
const stateRegex = RegExp('^[A-Za-z]{4,}$');
const zipRegex = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');
const phoneNumberRegex = RegExp('^[1-9]{1}[0-9]{9}$');
const emailRegex = RegExp('[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}');

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
        if (!nameRegex.test(parameter[0])) throw "Invalid firstname Exception"
        this.firstName = parameter[0];
        if (!nameRegex.test(parameter[1])) throw "Invalid lastname Exception"
        this.lastName = parameter[1];
        if (!addressRegex.test(parameter[2])) throw "Invalid address Exception"
        this.address = parameter[2];
        if (!cityRegex.test(parameter[3])) throw "Invalid city Exception"
        this.city = parameter[3];
        if (!stateRegex.test(parameter[4])) throw "Invalid state Exception"
        this.state = parameter[4];
        if (!zipRegex.test(parameter[5])) throw "Invalid zip Exception"
        this.zip = parameter[5];
        if (!phoneNumberRegex.test(parameter[6])) throw "Invalid PhoneNumber Exception"
        this.phoneNumber = parameter[6];
        if (!emailRegex.test(parameter[7])) throw "Invalid email Exception"
        this.email = parameter[7];
    }
}
let addressBookArray = new Array();
choice = prompt("Enter 1.add contacts 0.exit  ");
if (choice == 1) {
    firstName1 = prompt("Enter the first name :");
    lastName1 = prompt("Enter the last name :");
    address1 = prompt("Enter the address :");
    city1 = prompt("Enter the city:");
    state1 = prompt("Enter the state :");
    zip1 = prompt("Enter the zip code :")
    phoneNumber1 = prompt("Enter the phone Number :");
    email1 = prompt("Enter the email :");
}
try {
    var contact = new Contact(firstName1, lastName1, address1, city1, state1, zip1, phoneNumber1, email1);
    addressBookArray.push(contact);
} catch (e) {
    console.log(e);
}
console.log(addressBookArray);
