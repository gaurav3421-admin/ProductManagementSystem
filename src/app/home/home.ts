import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router,RouterLink, RouterOutlet,RouterLinkActive  } from '@angular/router';
import { Authentication } from '../services/authentication';


@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

//  constructor(private _routerLink: Router) { };
  //private authService = inject(Authentication);
  //private router = inject(Router);
constructor(private router: Router, private authService: Authentication) {}

  LogOut(): void {
    //alert("Logout Clicked");
    console.log("Logout Clicked");
    this.authService.userlogout();
    this.router.navigate(['/login']);

  }

}
