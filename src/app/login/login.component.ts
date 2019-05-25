import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent  {

  isLoading: boolean = false;
  loggedinUser : string = null;
  constructor(public authService: AuthService,
              private route: Router){

  }
  onLogin(form: NgForm)
  {
    console.log(form.value);
    if(form.invalid){
      return;
    }
    this.authService.loginUser(form.value.username, form.value.password);
    this.route.navigate(['/create-mix'])

  }
}
