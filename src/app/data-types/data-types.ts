import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // directives like ngIf, ngFor etc


@Component({
  selector: 'app-data-types',
  imports: [CommonModule],
  templateUrl: './data-types.html',
  styleUrl: './data-types.css',
})
export class DataTypes {


  // constructor
  constructor() {} ;
  
   // Properties and Variables
  _studentName:string ="This is my first Angular App";
  _largeNumber: bigint = 9007199254740991n;
  _age:number=35;
  _isEnrolled:boolean=true;
  
  _studentAge:any=22;
  
  

  // Object
 student = {
    id: 1,
    name: "Gaurav Kumar",
    age: 22,
    course: "Angular"
  };

  

  //Array
  students: string[] = ["Gaurav", "Amit", "Rohan", "Sita"];
  marks: number[] = [85, 90, 78, 92];
  



  //Array of Objects
  products = [
    { id: 1, name: "Keyboard", price: 500 },
    { id: 2, name: "Mouse", price: 300 },
    { id: 3, name: "Monitor", price: 5000 }
  ];

  // Tuple
  //Basic Tuple
 user: [number, string,string] = [101, "Gaurav","Choudhary"];



  //Tuple with Different DataTypes
  employee: [number, string, boolean] = [1, "Nitin", true];
  //Array of Tuples
  studentstuple: [number, string][] = [
    [1, "Amit"],
    [2, "Sita"],
    [3, "Rohan"]
  ];

  // Methods
  getProduct() :void {
     console.log ("Product details");
  }


}
