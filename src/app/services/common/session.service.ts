import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';


@Injectable({
  providedIn: 'root'
})
export class SessionService {
  
  isAuthenticated = false;
  user = null;

  constructor() { }

  setAuthenticated(isAuthenticated){
    this.isAuthenticated = isAuthenticated;
  }
  
  getAuthenticated(){
    return this.isAuthenticated;
  }
  
  setUser(user){
    this.user = user;
  }
  
  getUser(){
    return this.user;
  }

  async login(username, password) {
    try {
      console.log("calling Auth.signIn" + username + password);
      const user = await Auth.signIn(username, password);
      console.log("called Auth.signIn");
      console.log(user);
      this.setAuthenticated(true);
      this.setUser(user);
      console.log("invoked session service");
    } catch (error) {
      console.log('error logging in:', error);
    }
  }

  async logout() {
    try {
      await Auth.signOut();
      console.log("User Signed out");
      this.setAuthenticated(false);
      this.setUser(null);
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

}
