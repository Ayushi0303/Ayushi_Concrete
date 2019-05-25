import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from  "../auth-service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

   isLoading: boolean = false;
  constructor(public authService: AuthService,
              private route:Router){

  }
  onSignup(form: NgForm)
  {
    console.log("AYuhsi");
    console.log(form.value)
    //I now want to send a req to the backend to create new user so need a new service create a auth.service.ts
    if(form.invalid ||  (form.value.password != form.value.confirmpassword)){
      return;
    }
    this.authService.createUser(form.value.firstname, form.value.lastname,form.value.phonenumber,
                                form.value.username,form.value.email,form.value.password);
      this.route.navigate(['/login']);
  }

}
