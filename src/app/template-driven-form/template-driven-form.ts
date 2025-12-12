import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // teamplate-driven forms
import { NgForm } from '@angular/forms'; // Import NgForm for template-driven forms
import { CommonModule, formatDate } from '@angular/common'; // for directives like ngIf, ngFor
import { GetStringLengthPipe } from '../get-string-length-pipe';


@Component({
  selector: 'app-template-driven-form',
  imports: [CommonModule, FormsModule, GetStringLengthPipe],
  templateUrl: './template-driven-form.html',
  styleUrl: './template-driven-form.css',
})
export class TemplateDrivenForm implements OnInit {

  title = 'student-registration';
  todayString: string = ''; // Property to hold today's date in 'yyyy-MM-dd' format

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
    specialization: '',
    hobbies: {
      reading: false,
      gaming: false,
      sports: false,
      music: false
    },
    // ... (other fields like fullName, age, gender, dob, hobbies)
    qualifications: {
      classX: {
        board: '',
        percentage: '',
        year: ''
      },
      classXII: {
        board: '',
        percentage: '',
        year: ''
      },
      graduation: {
        board: '',
        percentage: '',
        year: ''
      },
      masters: {
        board: '',
        percentage: '',
        year: ''
      }
    }
  };

  genders = ['Male', 'Female', 'Other'];
  semesters = ['1st Semester', '2nd Semester', '3rd Semester', '4th Semester', '5th Semester', '6th Semester'];
  ngOnInit() {
    // Set the maximum allowed date to today to prevent future dates of birth
    // The input type="date" value must be in 'yyyy-MM-dd' format
    this.todayString = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
  }
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
      specialization: '',
      hobbies: {
        reading: false,
        gaming: false,
        sports: false,
        music: false
      },
      // ... (other fields like fullName, age, gender, dob, hobbies)
      qualifications: {
        classX: {
          board: '',
          percentage: '',
          year: ''
        },
        classXII: {
          board: '',
          percentage: '',
          year: ''
        },
        graduation: {
          board: '',
          percentage: '',
          year: ''
        },
        masters: {
          board: '',
          percentage: '',
          year: ''
        }
      }

    };
  }

}
