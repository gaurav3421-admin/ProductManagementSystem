import { Component, OnInit, } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'; // teamplate-driven forms
import { CommonModule } from '@angular/common'; // for directives like ngIf, ngFor
import { Commonservice } from '../services/commonservice'

@Component({
  selector: 'app-student-registration',
  imports: [FormsModule, CommonModule],
  templateUrl: './student-registration.html',
  styleUrl: './student-registration.css',
})
export class StudentRegistration implements OnInit {

  semesters:any[]=[];

  constructor(private _commonServices: Commonservice) { }; // Dependency Injection

  ngOnInit(): void {
    this._commonServices.getSemesterList().subscribe(
      (data: any) => {
        console.log("Semester List:", data);
        this.semesters = data;
      },
      (error: any) => {
        console.error("Error fetching semester list:", error);
      }
    );
  }

}
