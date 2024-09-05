import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm:FormGroup
  constructor(private fb:FormBuilder){
    this.loginForm = this.fb.group({
      // username: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6)]]
    })
  }

  onSubmit(){
    console.log(this.loginForm.value.username)
    console.log(this.loginForm.value.email)
    console.log(this.loginForm.value.password)
  }

  validateControl(input:string){
    return this.loginForm.get(input)?.invalid &&
    (this.loginForm.get(input)?.touched ||
    this.loginForm.get(input)?.dirty)
  }

  validateControlError(input:string,error:string){
    return this.loginForm.get(input)?.hasError(error)
    &&
    (this.loginForm.get(input)?.touched ||
    this.loginForm.get(input)?.dirty)
  }

get isFormValid() {
  return this.loginForm.valid;
}
}
