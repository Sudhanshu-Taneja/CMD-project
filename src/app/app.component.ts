import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { formService } from './shared/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello World!';

  constructor(private router: Router, private service: formService){}

  editflag(){
    this.service.editflag.next(true)
  }
}
