//Named imports are done like this:
import { Person } from "./person";
import { Driver } from "./driver";
//Default imports are done like this:
import Person from "./person"; 

//ARROW FUNCTIONS
//simple array
const jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { id: 3, isActive: false}
];
//This is the equivalent of calling a function inside of filter() and returning a reference to the object, but this is much faster and cleaner
const activeJobs = jobs.filter(job => job.isActive); 
console.log(activeJobs); 

//MAPS
const colors = [ 'red', 'blue', 'green' ]; 
//A good use of the arrow function is when you have one line of code inside the function and it returns something
//const items = colors.map(color => ' <li> ' + color + ' </li> ');  //this can be made even cleaner by using template literals with ES6:
const items = colors.map(color => `<li> ${color} </li> `) // the ${} is the placeholder in the template. 
console.log(items); 

//OBJECT DESTRUCTURING
const address = {
    street: ' ',
    city: ' ',
    country: ' ', 
}
//values can be stored like this:
/*
const street = address.street;
const city = address.city;
const country = address.country; 
*/
//but this is faster and way less repetative
const { street, city, country } = address; 

//SPREAD OPERATOR - ...

//This is the old way of doing things
const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6]; 

const combined = firstArray.concat(secondArray); 

//the spread operator is ...
const combinedArray = [...firstArray, ...secondArray]; 
//you can easily clone objects, arrays just by spreading them
const clone = [...firstArray]; 
//you can easily add new items to the object
const addDetailToAddress = {...street, ...city, ...country, nearestRestaurant: "McDonalds"}; 

//CLASSES

//inheritance
const driver = new Driver("Hamilton");

//MODULES
/* Modularity is used to make files less "bloated" and make code easier to integrate and be more scaleable */ 
/* Therefore I have moved the classes into different files. */ 
 
