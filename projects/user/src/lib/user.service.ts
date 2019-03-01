import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  createAccount(userData: any): any {
    throw new Error("Method not implemented.");
  }
  login(email: any, password: any): any {
    throw new Error("Method not implemented.");
  }

  constructor() { }
}
