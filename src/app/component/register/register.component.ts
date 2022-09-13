import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { AngularFireModule } from '@angular/fire/compat'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

   username : string ='';
   password :string ='';
  constructor(private auth : AuthService  ) { }

  ngOnInit(): void {
  }
register(){
  if (this.username == '')
  {
    alert('please enter username');
    return;
  }
  if(this.password == '')
  {
    alert('please enter password');
    return;
  }

  this.auth.register(this.username, this.password);

  this.username ='';
  this.password ='';
}
     
}
