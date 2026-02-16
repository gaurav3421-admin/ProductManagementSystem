import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms"; // step 1
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-directives',
  imports: [FormsModule, CommonModule], // step 2
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  _isDisabled: boolean = false
  _IsStudentDivVisible: boolean = true;
  employeeName: string = " Ajit Kumar ";
  _productList = [
    { Id: 101, Name: "Laptop", Price: 45000 },
    { Id: 102, Name: "Mobile", Price: 25000 },
    { Id: 103, Name: "Tablet", Price: 15000 },
    { Id: 104, Name: "Desktop", Price: 55000 }
  ]
  _productStatus:string = 'OutOfStocksfs'; //
  _addGreeClass: boolean=true;
   _errorClass: boolean=true;
   _fontSize:string="20px"

  submitStudentInfo(studentName: string): void {
    alert("Student Name: " + studentName);

  }

  employeeInformation(xxxx: string): void {
    alert("Employee Information Submitted Successfully! " + xxxx);

  }

  show(): void {

    this._IsStudentDivVisible = true;
  }

  hide(): void {
    this._IsStudentDivVisible = false;
  }
}
