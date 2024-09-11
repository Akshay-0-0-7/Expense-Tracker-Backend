import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../Services/auth.service'; // Adjust the import based on your project structure
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['']
    }, {
      validators: this.passwordValidator()
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const registerDto = this.registerForm.value;
      this.authService.register(registerDto).subscribe({
        next: (response) => {
          // Handle successful registration
          console.log('Registration successful', response);
          this.router.navigate(['/login']); // Redirect to login page
        },
        error: (err) => {
          console.error('Registration failed', err);
          // Handle error, e.g., show a message to the user
        }
      });
    }
  }

  validateControl(input: string) {
    return this.registerForm.get(input)?.invalid && (this.registerForm.get(input)?.touched || this.registerForm.get(input)?.dirty);
  }

  validateControlError(input: string, error: string) {
    return this.registerForm.get(input)?.hasError(error) && (this.registerForm.get(input)?.touched || this.registerForm.get(input)?.dirty);
  }

  passwordValidator(): Validators {
    return (formGroup: AbstractControl): { [key: string]: boolean } | null => {
      const password = formGroup.get('password')?.value;
      const confirmPassword = formGroup.get('confirmpassword')?.value;
      if (password !== confirmPassword) {
        formGroup.get('confirmpassword')?.setErrors({ passwordMismatch: true });
        return { passwordMismatch: true };
      } else {
        return null;
      }
    };
  }

  get isFormValid() {
    return this.registerForm.valid;
  }
}