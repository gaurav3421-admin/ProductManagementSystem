import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; //  
// import { ComponentUnderStanding } from './component-under-standing/component-under-standing' ; // step 1: import the component
import { StudentRegistration } from './student-registration/student-registration' ; // step 1: import the component
import { DataTypes } from './data-types/data-types' ; // step 1: import the component
import { DataBinding } from './data-binding/data-binding' ; // step 1: import the component
import { Directives } from './directives/directives';
import { Pipes} from './pipes/pipes';
import { TemplateDrivenForm} from './template-driven-form/template-driven-form';
import { ReactiveDrivenForm} from './reactive-driven-form/reactive-driven-form';
import { Home } from './home/home';




@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FormsModule
    // ComponentUnderStanding  // step 2: add to imports array
    //StudentRegistration
    //DataTypes
    //DataBinding,
    //Directives
    //Pipes
    //TemplateDrivenForm
    //ReactiveDrivenForm
    //Home
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('FirstAngularProject');
}
