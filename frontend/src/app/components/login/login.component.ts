import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ValidateEmail, ValidatePassword } from 'src/app/helpers/validator';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;


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
    this.loginForm = this.formBuilder.group({
      email: ['', [ValidateEmail]],
      password: ['', [ValidatePassword]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.checkValidate()
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.f.email.value, this.f.password.value)
  }


  checkValidate() {
    for (const elem in this.f) {
      var input = document.getElementById(elem)
      if (this.f[elem].errors) {
        if (!this.f[elem].errors.valid) {
          this.showValidate(input,this.f[elem].errors.error)
        }
      }
    }
  }


  showValidate(elem:HTMLElement,error:string ) {
    elem.setAttribute('data-validate',error)
    elem.classList.add("alert-validate")
  }

  //hide error after input focused
  hideValidate(id: string) {
    var elem = document.getElementById(id)
    elem.classList.remove("alert-validate")
  }


}
