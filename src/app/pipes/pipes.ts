import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // for using built-in pipes

@Component({
  selector: 'app-pipes',
  imports: [CommonModule],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
})
export class Pipes {

  name: string = "gaurav kumar";
  today: Date = new Date();
  price: number = 1234.5678;
  percentValue: number = 0.4523;

  fruits: string[] = ['Apple', 'Banana', 'Mango', 'Orange'];

  student = {
    id: 101,
    name: "Gaurav",
    course: "Angular"
  };

  keyValueObject = {
    id: 1,
    name: 'Angular',
    level: 'Beginner'
  };

  gender = 'male';

  genderMapping: any = {
    male: 'He is a student',
    female: 'She is a student',
    other: 'They are students'
  };

  pluralMapping: any = {
    '=0': 'No students',
    '=1': 'One student',
    other: '# students'
  };

  studentCount: number = 5;

  observableData = new Promise(resolve => {
    setTimeout(() => resolve('Async Data Loaded'), 2000);
  });


}
