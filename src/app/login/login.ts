import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Authentication } from '../services/authentication';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule], // register FormsModule to use ngModel
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
private _isuserLoggedIn: boolean = false;

  //constructor(private _routerLink: Router,private authService: Authentication) { };
  constructor(private _routerLink: Router) { };

      // call this from template (e.g. (ngSubmit)="onSubmit(loginForm)")
      
  Login(_loginForm: NgForm): void {
    if (_loginForm.valid) {
      console.log('Valid Form');
      this._routerLink.navigate(['//home/dashboard']);
      // this.authService.userlogintokenid(_loginForm.value)?.subscribe(
      // (response) => {
      //   console.log("API Response:", response);
      //   if (response.accessToken) {
      //     localStorage.setItem('user', JSON.stringify(response));
      //     localStorage.setItem('authToken', response.accessToken);
      //     console.log("Token stored in localStorage:", response.accessToken);
      //      this._routerLink.navigate(['/home']);
      //   }
      // },
      // (error: HttpErrorResponse) => {
      //   console.error("Login error:", error);
      //   this._isuserLoggedIn = false;
      // }
    //);
    } else {
      console.log('Invalid Form');
    }
  }
}

//if (_loginForm.value.username == "admin" && _loginForm.value.password == "admin") {
      //console.log("Valid Form");
      //this._authService.userlogintokenid(_loginForm.value);
      //this._authServiceNew.userLogin();
      
      //}

    //   if (_loginForm.valid) {
    //   console.log('Valid Form');
    //   this.auth.userlogintokenid(_loginForm.value)?.subscribe(
    //     (response) => {
    //       console.log('Login Successful:', response);
    //       this._routerLink.navigate(['/home']);
    //     },
    //     (error) => {
    //       console.error('Login failed:', error);
    //     }
    //   );
    // } else {
    //   console.log('Invalid Form');
    // }
// if (_loginForm.valid) {
//       console.log('Valid Form');
//       this.auth.userlogintokenid(_loginForm.value)?.subscribe(
//       (response) => {
//         console.log("API Response:", response);
//         if (response.accessToken) {
//           localStorage.setItem('user', JSON.stringify(response));
//           localStorage.setItem('authToken', response.accessToken);
//           console.log("Token stored in localStorage:", response.accessToken);
//            this._routerLink.navigate(['/home']);
//         }
//       },
//       (error: HttpErrorResponse) => {
//         console.error("Login error:", error);
//         this._isuserLoggedIn = false;
//       }
//     );
//     } else {
//       console.log('Invalid Form');
//     }

  // Login(_loginForm: NgForm): void {
  //   if (_loginForm.valid) {
  //     console.log('Valid Form');

  //     this.authService.login(_loginForm.value.username, _loginForm.value.password, 30).subscribe({
  //     next: (user) => {
  //       console.log("Logged in user:", user);
  //       alert('Login successful!');
  //       // redirect to dashboard or home
  //       // this.router.navigate(['/home']);
  //     },
  //     error: (err) => {
  //       console.error("Login error:", err);
  //       //this.errorMessage = "Invalid username or password";
  //     }
  //   });
      
  //   } else {
  //     console.log('Invalid Form');
  //   }
  // }