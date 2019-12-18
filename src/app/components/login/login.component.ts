import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authError : any;
  clicked = false;

  constructor(public authService : AuthService) { }

  ngOnInit() {
    this.authService.eventAuthError$.subscribe( data => {
      this.authError = data;
    });
    this.clicked=false;

  }
  login(frm) {
    this.authService.login(frm.value.email, frm.value.password);
  }
}
