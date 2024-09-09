import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm:FormGroup
  constructor(private fb:FormBuilder){
    this.registerForm = this.fb.group({
      username: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6)]],
      confirmpassword: ['']
    },
    {
      validator: this.passwordValidator()
    })
  }

  onSubmit(){
    console.log(this.registerForm.value.username)
    console.log(this.registerForm.value.email)
    console.log(this.registerForm.value.password)
    console.log(this.registerForm.value.confirmpassword)
  }

  validateControl(input:string){
    return this.registerForm.get(input)?.invalid &&
    (this.registerForm.get(input)?.touched ||
    this.registerForm.get(input)?.dirty)
  }

  validateControlError(input:string,error:string){
    return this.registerForm.get(input)?.hasError(error)
    &&
    (this.registerForm.get(input)?.touched ||
    this.registerForm.get(input)?.dirty)
  }

  passwordValidator(): ValidatorFn {
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
