import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  users: any[] = [];

  constructor() {
    const storedUsers = localStorage.getItem('users');

    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
  }
  register(user: any) {
    this.users.push(user);
    
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  getUsers() {
    return this.users;
  }

  clearUsers() {
    this.users = [];
  }
}
