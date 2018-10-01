import { Injectable } from '@angular/core';
import {Router} from '@angular/router'

@Injectable()
export class AuthService {
  storageKey: string = 'ital-safari-jwt';
  constructor(private router: Router) { }

  setToken(token: string){
    localStorage.setItem(this.storageKey, token)

  }

}
