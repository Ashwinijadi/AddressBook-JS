//AddressBook Programming

const prompt = require('prompt-sync')();
const nameRegex = RegExp('^[A-Z]{1}[A-Za-z]{2,}$');
const addressRegex = RegExp('^[A-Za-z0-9/,]{4,}$');
const cityRegex = RegExp('^[A-Za-z]{4,}$');
const stateRegex = RegExp('^[A-Za-z]{4,}$');
const zipRegex = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');
const phoneNumberRegex = RegExp('^[1-9]{1}[0-9]{9}$');
const emailRegex = RegExp('[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}');

class Contact {
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
do {
    choice = prompt("Enter 1.add contacts 2.Edit contact 3.delete contact 4.count contacts 5.Search person by state 6.Search person by city 7.sort by person name 0.exit  ");
    if (choice == 1) {
        let firstName1 = prompt("Enter the first name :");
        if (addressBookArray.find(contact => contact.firstName == firstName1)) {
            console.log("dublicate Entry");
            return;
        }
        let lastName1 = prompt("Enter the last name :");
        let address1 = prompt("Enter the address :");
        let city1 = prompt("Enter the city:");
        let state1 = prompt("Enter the state :");
        let zip1 = prompt("Enter the zip code :")
        let phoneNumber1 = prompt("Enter the phone Number :");
        let email1 = prompt("Enter the email :");
        try {
            var contact = new Contact(firstName1, lastName1, address1, city1, state1, zip1, phoneNumber1, email1);
            addressBookArray.push(contact);
            console.log(addressBookArray);
        } catch (e) {
            console.log(e);
        }
    }
    if (choice == 2) {
        let Name = prompt("Enter the first name to edit:");
        let changedName = prompt("Enter the Name changed :");
        let edit = addressBookArray.find(contact => contact.firstName == Name)
        if (edit == undefined)
            console.log("No such contact, please enter correct name ");
        else
            console.log(edit.firstName = changedName);
        console.log(addressBookArray);
    }

    if (choice == 3) {
        let Name = prompt("Enter the first name to delete:");
        let deleted = addressBookArray.find(contact => contact.firstName == Name)
        if (deleted == undefined)
            console.log("No such contact, please enter correct name ");
        else
            addressBookArray.pop(deleted);
        console.log(addressBookArray);
    }

    if (choice == 4) {
        let count = addressBookArray.reduce(contacts => contacts + 1, 0)
        console.log("count is : " + count);
    }
    if (choice == 5) {
        let stateSearch = prompt("Enter the state name to search for person:");
        let stateContacts = addressBookArray.filter(contact => contact.state == stateSearch);
        console.log("persons in this state are : " + JSON.stringify(stateContacts));
        let stateCount = stateContacts.reduce(contacts => contacts + 1, 0);
        console.log("count of persons in this state are : " + stateCount);
    }

    if (choice == 6) {
        let citySearch = prompt("Enter the city name to search for person:");
        let cityContacts = addressBookArray.filter(contact => contact.city == citySearch);
        console.log("persons in this city are" + JSON.stringify(cityContacts));
        let cityCount = cityContacts.reduce(contacts => contacts + 1, 0);
        console.log("count of persons in this city are : " + cityCount);
    }
    if (choice == 7) {
        let personSort = addressBookArray.sort();
        console.log("sorted alphabetically" + JSON.stringify(personSort));
    }
}
while (choice != 0);