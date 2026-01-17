import {
  Component,
  Input,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges
}
  from '@angular/core';

@Component({
  selector: 'app-component-lifecycle-hooks',
  imports: [],
  templateUrl: './component-lifecycle-hooks.html',
  styleUrl: './component-lifecycle-hooks.css',
})
export class ComponentLifecycleHooks implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input() username: string = '';

  constructor() {
    console.log('1. Constructor -Initialize class variables');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('2. ngOnChanges - Respond to input property changes ', changes);
  }

  ngOnInit() {
    console.log('3. ngOnInit - Component initialization');
  }

  ngDoCheck() {
    console.log('4. ngDoCheck - Detect changes');
  }

  ngAfterContentInit() {
    console.log('5. ngAfterContentInit - After content initialization');
  }

  ngAfterContentChecked() {
    console.log('6. ngAfterContentChecked - After content checked');
  }

  ngAfterViewInit() {
    console.log('7. ngAfterViewInit - After view initialization-Finally called once all child views are finished and the parent\'s view is complete');
  }

  ngAfterViewChecked() {
    console.log('8. ngAfterViewChecked - After view checked');
  }

  ngOnDestroy() {
    console.log('9. ngOnDestroy - Cleanup before destroyed');
  }



}
