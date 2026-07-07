import { Injectable } from '@angular/core';
import { User } from '.../models/user';

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

  private generateFakeJwt(user: User): string{
    return btoa(JSON.stringify({
      email: user.email,
      role: user.role,
      exp: Date.now() + 3600000
    }))
  }
}
