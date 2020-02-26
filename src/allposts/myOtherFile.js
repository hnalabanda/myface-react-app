import {myOtherFunction, myNumber} from './myFile';

mike.myNumber;
mike.myOtherFunction();



const person = {
    firstName: "Mike",
    lastName: "Walker",
    email: "michael.walker@softwire.com",
};


// const firstName = person.firstName;
// const lastName = person.lastName;

const {firstName, lastName} = person;


const numbers = [1, 4, 3, 2];

// const firstNumber = numbers[0];


const [firstElement, secondElement] = numbers;



const state = useState(null);
const myData = state[0];
const setMyData = state[1];