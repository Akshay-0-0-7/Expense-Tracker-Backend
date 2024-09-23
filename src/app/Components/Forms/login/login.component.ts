import { Component,EventEmitter,Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../Services/auth.service';import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  @Output() isLoggedInEvent = new EventEmitter<boolean>();


  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const loginDto = this.loginForm.value;
      this.authService.login(loginDto).subscribe({
        next: (response) => {
          // Handle successful login, e.g., store token
          localStorage.setItem('authToken', response.token); // Now TypeScript knows response has a token
          this.router.navigate(['accounts']); // Redirect to a protected route
        },
        error: (err) => {
          console.error('Login failed', err);
          // Handle error, e.g., show a message to the user
        }
      });
    }
  }

  validateControl(input: string) {
    return this.loginForm.get(input)?.invalid && (this.loginForm.get(input)?.touched || this.loginForm.get(input)?.dirty);
  }

  validateControlError(input: string, error: string) {
    return this.loginForm.get(input)?.hasError(error) && (this.loginForm.get(input)?.touched || this.loginForm.get(input)?.dirty);
  }

  get isFormValid() {
    return this.loginForm.valid;
  }
}