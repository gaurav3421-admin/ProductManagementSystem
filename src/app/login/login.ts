import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule], // register FormsModule to use ngModel
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {



  constructor(private _routerLink: Router) { };
    Login(_loginForm: NgForm): void {

    if (_loginForm.valid) {

      //if (_loginForm.value.username == "admin" && _loginForm.value.password == "admin") {
      console.log("Valid Form");
      //this._authService.userlogintokenid(_loginForm.value);
      //this._authServiceNew.userLogin();
      this._routerLink.navigate(['/home']);
      //}

    } else {
      console.log("Invalid Form");
    }

  }

}
