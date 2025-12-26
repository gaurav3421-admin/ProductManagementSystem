import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { Authentication } from '../services/authentication';


@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  userRole: string | undefined;
  constructor(private _routerLink: Router) { };
  public authService = inject(Authentication);
  private router = inject(Router);
  //constructor(private router: Router, private authService: Authentication) {}

  ngOnInit() {

    this.userRole = this.authService.getUser();
    console.log("Home Component ngOnInit=> User Role from localStorage :", this.userRole);

  }


  UserTokenBasedLogout(): void {
    //alert("Logout Clicked");
    console.log("Logout Clicked");
    this.authService.UserTokenBasedLogout();
    this.router.navigate(['/login']);

  }

}
