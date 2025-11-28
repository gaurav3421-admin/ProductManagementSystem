import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'; // teamplate-driven forms
import { CommonModule } from '@angular/common'; // for directives like ngIf, ngFor

@Component({
  selector: 'app-student-registration',
  imports: [FormsModule,CommonModule],
  templateUrl: './student-registration.html',
  styleUrl: './student-registration.css',
})
export class StudentRegistration {

}
