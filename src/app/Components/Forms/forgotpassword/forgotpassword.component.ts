import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.forgotPasswordForm = this.fb.group({
      username: ['', [Validators.required]],  // Username field
      email: ['', [Validators.required, Validators.email]]  // Email field with validation
    });
  }

  // Form submission logic
  onSubmit() {
    console.log(this.forgotPasswordForm.value.username);
    console.log(this.forgotPasswordForm.value.email);
  }

  // Utility to check if control is invalid
  validateControl(input: string) {
    return this.forgotPasswordForm.get(input)?.invalid &&
      (this.forgotPasswordForm.get(input)?.touched || this.forgotPasswordForm.get(input)?.dirty);
  }

  // Utility to check for specific validation errors
  validateControlError(input: string, error: string) {
    return this.forgotPasswordForm.get(input)?.hasError(error) &&
      (this.forgotPasswordForm.get(input)?.touched || this.forgotPasswordForm.get(input)?.dirty);
  }

  // Getter to check form validity
  get isFormValid() {
    return this.forgotPasswordForm.valid;
  }
}
