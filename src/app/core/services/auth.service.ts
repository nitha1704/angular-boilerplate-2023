import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SignInForm, SignUpForm } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogin = new BehaviorSubject<boolean>(false);
  userInfo = new BehaviorSubject<any>(undefined);

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  getAccessToken() {
    return localStorage.getItem("accessToken");
  }

  getIsLogin() {
    return this.isLogin.asObservable();
  }
  getUserInfo() {
    return this.userInfo.asObservable();
  }
}
