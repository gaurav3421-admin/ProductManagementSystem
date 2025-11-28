import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router,RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

constructor(private _routerLink: Router) { };

  // LogOut (): void {
  //   alert("Logout Clicked");
  //   console.log("Logout Clicked");
  //   //this._authService.userlogout();
  //   this._routerLink.navigate(['/login']);
    
  // }

}
