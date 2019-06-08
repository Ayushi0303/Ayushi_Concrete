import { Injectable} from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { AuthData } from './auth-data.model';
import { AuthDataLogin } from './auth-datalogin.model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

//import { LogOut } from './logout.model';


@Injectable({providedIn: "root"})
export class AuthService{
    private m_token :string;
    private authStatusListener = new Subject<boolean>();
    private isAuthenticated = false;

    constructor(private http:HttpClient, private route: Router){
    }

    getToken() {
        return this.m_token;
    }
    getAuthStatusListener(){
        return this.authStatusListener.asObservable();
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
        //console.log(authDataLogin);
        this.http.post<{token: string}>("http://localhost:3000/api/user/login",authDataLogin)
        .subscribe( response =>{
            this.m_token = response.token;
            if(this.m_token){
                this.isAuthenticated = true;
                this.authStatusListener.next(true);
                this.route.navigate(['/create-mix']);
        }
            
            console.log(response);
            
        });
    }
    logoutUser(){
        this.m_token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        this.route.navigate(['/login']);
        };

    getIsAuth() {
            return this.isAuthenticated;
        }
    }

    
