//Export the class with the export keyword before it
//Import needed classes with the import keyword
import { Person } from './person';



export class Driver extends Person{
    //we have to call the super() method if we are making a custom constructor. that way we get the parent class' constructor parameter. 
        constructor(name, polePosition) {
            super(name); 
            this.polePosition = polePosition; 
        }
        drive(){
            console.log("I am driving! "); 
        }
    }

    