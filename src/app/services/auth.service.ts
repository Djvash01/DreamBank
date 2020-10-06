import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router:Router) { }


  signin(body){
    return this.httpClient.post<any>(`${environment.apiUrlRoot}/signin`,body)
  }

  loggedIn() {
    return !!localStorage.getItem('auth_token');
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.router.navigate(['login']);
  }

  getToken() {
    return localStorage.getItem('auth_token');
  }
}
