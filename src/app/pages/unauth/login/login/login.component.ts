import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/common/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    userID: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private router: Router,
    private sessionService: SessionService,
  ) { }

  ngOnInit(): void {
  }
  
  onSubmit() {
    console.log("onsubmit of login called");
    this.sessionService.login(this.loginForm.value.userID, this.loginForm.value.password);
    this.router.navigateByUrl("/");
  }

  /*
  async login() {
    try {
      console.log("calling Auth.signIn" + this.loginForm.value.userID + this.loginForm.value.password);
      const { user } = await Auth.signIn(this.loginForm.value.userID, this.loginForm.value.password);
      console.log("called Auth.signIn");
      console.log(user);
      this.sessionService.setAuthenticated(true);
      this.sessionService.setUser(user);
      console.log("invoked session service");
    } catch (error) {
      console.log('error logggin in:', error);
    }
  }
  */
}
