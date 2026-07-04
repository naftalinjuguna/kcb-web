import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  users: any[] = [];

  register(user: any) {
    this.users.push(user);
  }

  getUser() {
    return this.users;
  }
}
