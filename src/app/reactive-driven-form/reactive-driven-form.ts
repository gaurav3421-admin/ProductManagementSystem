import { Component,inject, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms'; // step 1: import ReactiveFormsModule
import { CommonModule } from '@angular/common'; // for directives like ngIf, ngFor


@Component({
  selector: 'app-reactive-driven-form',
  imports: [ReactiveFormsModule,CommonModule], // Step 2: add ReactiveFormsModule to imports
  templateUrl: './reactive-driven-form.html',
  styleUrl: './reactive-driven-form.css',
})
export class ReactiveDrivenForm implements OnInit {
  title = 'student-registration-reactive';
  studentForm!: FormGroup;
   private formBuilder = inject(FormBuilder);

  genders = ['Male', 'Female', 'Other'];
  semesters = ['1st Semester', '2nd Semester', '3rd Semester', '4th Semester', '5th Semester', '6th Semester'];

  constructor(private fb: FormBuilder) { } // Step 3: inject FormBuilder
  

  ngOnInit() {
    this.initializeForm();
  }

  
  // method to initialize the form structure
  initializeForm() {
    this.studentForm = new FormGroup ({
      
         fullName: new FormControl('', Validators.required),
         age: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(100)]),
         gender: new FormControl('', Validators.required),
         email: new FormControl('', [Validators.required, Validators.email]),
         phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
         address:new FormControl('', Validators.required),
      
        fatherName:new FormControl('', Validators.required),
        motherName:new FormControl('', Validators.required),
        parentContact: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
        parentOccupation: new FormControl('', Validators.required),
        familyAddress:new FormControl('') ,
      
        courseName: new FormControl('', Validators.required),
        courseDuration: new FormControl('null', [Validators.required, Validators.min(1)]),
        semester: new FormControl('', Validators.required),
        specialization: new FormControl('')
            
    });
  }

  // Helper getter to access root controls
  get controls() {
    return this.studentForm.controls;
  }

  onSubmit() {
    if (this.studentForm.valid) {
      console.log('Form Submitted Successfully!', this.studentForm.value);
      alert('Form Submitted! Check console for data.');
      // Add logic here to send data to a backend service
    } else {
      console.log('Form is invalid', this.studentForm.errors);
      // Mark all fields as touched to display validation errors if they haven't been already
      this.markAllAsTouched(this.studentForm);
    }
  }

  onReset() {
    this.studentForm.reset();
  }

  // Helper method to programmatically mark all controls as touched
  markAllAsTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control!.markAsTouched({ onlySelf: true });
      if (control instanceof FormGroup) {
        this.markAllAsTouched(control);
      }
    });
  }

}
