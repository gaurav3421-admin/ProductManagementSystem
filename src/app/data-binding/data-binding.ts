import { Component } from '@angular/core';
import  { FormsModule  } from "@angular/forms";
import { CommonModule  } from '@angular/common'; // Import CommonModule to use common directives like NgIf

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule,CommonModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {

   _isDisabled:boolean=false

  employeeName:string=" Ajit Kumar ";


  submitStudentInfo( studentName:string ):void {
    alert("Student Name: " + studentName);

  }

  employeeInformation(xxxx:string ):void {
    alert("Employee Information Submitted Successfully! " + xxxx);

  }


}
