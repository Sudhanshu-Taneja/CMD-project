import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth"
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth : AngularFireAuth, private  router : Router) { } 

login(username : string,password : string){
  this.fireauth.signInWithEmailAndPassword(username,password).then(  () => {
      localStorage.setItem('token','true');
      this.router.navigate(['viewallappointments']);
  }, err =>{
      alert(err.message);
      this.router.navigate(['landing']);
  })

}
// register method
register (username : string, password : string)
{
  this.fireauth.createUserWithEmailAndPassword(username, password).then( ()=> {
   alert('Registration Successful');
    this.router.navigate(['/landing']);
  }, err=> {
    alert(err.message);
    this.router.navigate(['/register']);

  })
}


logout(){
  this.fireauth.signOut().then( () =>{
    localStorage.removeItem('token');
    this.router.navigate(['/landing']);
  }, err => {
    alert(err.message)
  })
}


}
