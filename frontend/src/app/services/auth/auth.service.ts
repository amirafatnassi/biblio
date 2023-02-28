import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  public hasRole(): any {
    const role = localStorage.getItem('role');
    return role;
  }

  isExpiredToken(token: string): boolean {
    let decoded: any = jwt_decode(token);
    return Math.floor(new Date().getTime() / 1000) >= decoded.exp;
  }

  isAuthorized(allowedRole: string): boolean {
    if (allowedRole == null || !allowedRole) {
      return true;
    }
    const token = localStorage.getItem('token');

    if (!token) {
      return false;
    }
    const role = localStorage.getItem('role');
    return allowedRole == role;
  }
}
