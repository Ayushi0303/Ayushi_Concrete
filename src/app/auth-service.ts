import { Injectable} from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { AuthData } from './auth-data.model';
import { AuthDataLogin } from './auth-datalogin.model';
//import { LogOut } from './logout.model';


@Injectable({providedIn: "root"})
export class AuthService{
    constructor(private http:HttpClient){

    }
//req to create a new user
    createUser(firstname:string, lastname:string, phonenumber:string, username:string, email:string, password:string){
        const authData :AuthData = {firstname:firstname, lastname:lastname, phonenumber:phonenumber, username:username,
                                    email:email, password:password};
        //console.log(authData)
        this.http.post("http://localhost:3000/api/user/signup",authData)
        .subscribe( response =>{
            console.log(response);
             
        });
    }
    loginUser(username:string,password:string){
        const authDataLogin :AuthDataLogin = {username: username ,password: password};
        console.log(authDataLogin);
        this.http.post("http://localhost:3000/api/user/login",authDataLogin)
        .subscribe( response =>{
            console.log(response);
            
        });
    }
    // logoutUser(email:string){
    //     console.log("Logging out "+ email);
    //     const logOut :LogOut = {email:email};
    //     this.http.post("http://localhost:3000/api/user/logout",logOut)
    //     .subscribe( response =>{
    //         console.log(response);
    //         //alert(JSON.stringify(response))
    //     });
    // }
}