import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../Core/Services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';
  showPassword = false;
  rememberMe = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ingresar(): void {
    this.error = '';

    const loginCorrecto = this.authService.login(this.email, this.password);

    if (loginCorrecto) {
      // this.router.navigate(['/layout']);
      this.router.navigate(['/layout/dashboard']);
      return;
    }

    this.error = 'Usuario o contraseña incorrectos';
  }
}
