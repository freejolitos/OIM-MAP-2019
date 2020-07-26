import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isUserLoggedIn;
  public usserLogged: User;

  constructor() {
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(user: User) {
    this.isUserLoggedIn = true;
    this.usserLogged = user;
    localStorage.setItem('currentUser', JSON.stringify(user));

  }

  getUserLoggedIn() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

}
