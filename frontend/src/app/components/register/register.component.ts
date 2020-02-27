import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ValidateEmail, ValidatePassword, ValidateFirstName, ValidateLastName } from 'src/app/helpers/validator';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  user:User={email:"",firstname:"",lastname:"",password:""}

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {
    // redirect to home if already logged in
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', [ValidateFirstName]],
      lastname: ['', [ValidateLastName]],
      email: ['', [ValidateEmail]],
      password: ['', [ValidatePassword]],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }


  onSubmit() {
    this.checkValidate()
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.user.firstname=this.f.firstname.value
    this.user.lastname=this.f.lastname.value
    this.user.email=this.f.email.value
    this.user.password=this.f.password.value
    console.log(this.user)
    this.authService.register(this.user)
  }

  checkValidate() {
    for (const elem in this.f) {
      var input = document.getElementById(elem)
      if (this.f[elem].errors) {
        if (!this.f[elem].errors.valid) {
          this.showValidate(input, this.f[elem].errors.error)
        }
      }
    }
  }


  showValidate(elem: HTMLElement, error: string) {
    elem.setAttribute('data-validate', error)
    elem.classList.add("alert-validate")
  }

  //hide error after input focused
  hideValidate(id: string) {
    var elem = document.getElementById(id)
    elem.classList.remove("alert-validate")
  }

}
