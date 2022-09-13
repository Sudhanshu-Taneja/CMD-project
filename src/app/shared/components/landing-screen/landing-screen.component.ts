import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { LoginService } from '../../Service/login.service';

@Component({
  selector: 'app-landing-screen',
  templateUrl: './landing-screen.component.html',
  styleUrls: ['./landing-screen.component.scss'],
})
export class LandingScreenComponent implements OnInit {
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  isLoginFailed:boolean=false;
  errorMessage: any;

  constructor(private auth : AuthService , private fb: FormBuilder, private router: Router,private service:LoginService) {}
  cmd:boolean;
  cm:boolean;
  ngOnInit(): void {}
  display() {
    this.cmd=true;
    this.cm=false;
  }

  display1() {
    this.cm=true;
    this.cmd=false;
    
 }

  form: any = {
    username: "",
    password: ""
  };

  set(username: string, password: string) {
    this.form.username = username;
    this.form.password = password;
  }

data:any=[];
onSubmit() {
   const { username, password } = this.form;
this.login();
 

}



login() {

this.auth.login(this.form.username,this.form.password);
this.form.username = '';
this.form.password = '';

 }

 

}



