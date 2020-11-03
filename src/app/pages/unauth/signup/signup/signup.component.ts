import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
    userID: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });

  /*
  userID:string;
  password:string;
  confirmPassword:string;
  email:string;
  phone:string;
  firstName:string;
  lastName:string;
  */

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.signupForm.value.userID);
    this.signUp();
    this.router.navigateByUrl("/signup-complete");
  }

  async signUp() {
    try {
      const { user } = await Auth.signUp({
          username: this.signupForm.value.userID,
          password: this.signupForm.value.password,
          attributes: {
              email: this.signupForm.value.email,          // optional
              phone_number: this.signupForm.value.phone,   // optional - E.164 number convention
              given_name: this.signupForm.value.firstName,
              family_name: this.signupForm.value.lastName,
              // other custom attributes 
          }
      });
      console.log(user);
    } catch (error) {
      console.log('error signing up:', error);
    }
  }
}
