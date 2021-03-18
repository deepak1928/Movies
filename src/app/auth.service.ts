import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs"
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserLoggedIn : boolean= false;
  login(userName : string , password :string ): Observable {
      this.isUserLoggedIn= userName=="admin" && password =='admin';
      localStorage.setItem('isUserLoggedIn',this.isUserLoggedIn?"true":"false");
      
    }

    logout(): void {
      this.isUserLoggedIn = false;
         localStorage.removeItem('isUserLoggedIn'); 
      }

 

  constructor() { }
}
