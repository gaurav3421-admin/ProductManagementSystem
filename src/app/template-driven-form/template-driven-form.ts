import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // teamplate-driven forms
import { NgForm } from '@angular/forms'; // Import NgForm for template-driven forms
import { CommonModule } from '@angular/common'; // for directives like ngIf, ngFor
import { GetStringLengthPipe } from '../get-string-length-pipe';


@Component({
  selector: 'app-template-driven-form',
  imports: [CommonModule,FormsModule,GetStringLengthPipe],
  templateUrl: './template-driven-form.html',
  styleUrl: './template-driven-form.css',
})
export class TemplateDrivenForm {

  title = 'student-registration  sfd sdfsjdfjsgdfhgsjdfgjsdgfjhsgdjf jsgdfj sgfhgsjfdgjdfg ';

  // Data model for two-way binding
  studentData = {
    fullName: '',
    age: null as number | null,
    gender: '',
    email: '',
    phone: '',
    address: '',
    fatherName: '',
    motherName: '',
    parentContact: '',
    parentOccupation: '',
    familyAddress: '',
    courseName: '',
    courseDuration: null as number | null,
    semester: '',
    specialization: ''
  };

  genders = ['Male', 'Female', 'Other'];
  semesters = ['1st Semester', '2nd Semester', '3rd Semester', '4th Semester', '5th Semester', '6th Semester'];
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Submitted Successfully!', this.studentData);
      alert('Form Submitted! Check console for data.');
      // You can add logic here to send data to a backend service
    } else {
      console.log('Form is invalid');
    }
  }

  onReset(form: NgForm) {
    form.resetForm();
    // Re-initialize model to original state if needed
    this.studentData = {
      fullName: '',
      age: null,
      gender: '',
      email: '',
      phone: '',
      address: '',
      fatherName: '',
      motherName: '',
      parentContact: '',
      parentOccupation: '',
      familyAddress: '',
      courseName: '',
      courseDuration: null,
      semester: '',
      specialization: ''
    };
  }

}
