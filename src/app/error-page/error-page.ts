import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-error-page',
  imports: [CommonModule],
  templateUrl: './error-page.html',
  styleUrl: './error-page.css',
})
export class ErrorPage {

  constructor( public _routerLink: Router) { };
}
