import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable, tap } from 'rxjs';

interface Token {
  refresh: string,
  access: string
}

interface User {
  username: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  private token: null | string = null
  private refresh: null | string = null

  constructor(private http: HttpClient, private router: Router) { }

  login(userData: User): Observable<Token>{
    return this.http.post<Token>('http://212.8.247.94:800/auth_api/token', userData)
      .pipe(
        tap(
          (token: Token) => {
            localStorage.setItem('authToken', JSON.stringify(token))
            this.setToken(token['access'])
          }
        ))
  }

  setToken(token: null | string){
    this.token = token
  }

  getToken(): null | string{
    return this.token
  }

  isAuth():boolean{
    return !!this.token
  }

  logout(){
    this.setToken(null)
    localStorage.removeItem('authToken')
  }

  canActivate():boolean {
    if (this.isAuth()){    
      return true
    } else {
      this.router.navigate(['/login'])
      return false
    }
  }
}

