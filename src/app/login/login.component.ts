import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {

  email: string | any;
  password: string | any;
  message: string | any;
  mysubscription: Subscription | any;
  
  ngOnDestroy() {
    
  }
}

