import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly tokenKey = 'rama_demo_token';

  constructor(private router: Router) {}

  login(email: string, password: string): boolean {
    if (email === '123' && password === '123456') {
      localStorage.setItem(this.tokenKey, 'demo-token-rama');
      return true;
    }

    return false;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }
}