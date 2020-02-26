import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';
import { User } from '../models/user';
import { BehaviorSubject, Observable } from 'rxjs';
declare let alertify


@Injectable({
  providedIn: "root"
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  path = environment.path;



  login(email,password) {
    let headers = new HttpHeaders()
    headers = headers.append("Content-Type", "application/json")
    this.http.post<any>(this.path + `/users/login`, {email,password}, { headers: headers }).subscribe((data) => {
      if (data['token'] && data['user']) {
        localStorage.setItem('currentUser', JSON.stringify(data['user']));
        localStorage.setItem('currentUserToken', JSON.stringify(data['token']));
        this.currentUserSubject.next(data['user']);
        alertify.success('Succesfully login. Redirecting to homepage!');
        setTimeout(() => {
          this.router.navigateByUrl("") //homepage
        }, 2500)
      }
    }, (error) => {
      alertify.error('Email or password is incorrect');
    })
  }

  register(firstname,lastname,username,email,password) {
    let headers = new HttpHeaders()
    headers = headers.append("Content-Type", "application/json")
    this.http.post(this.path + `/users/register`, {firstname,lastname,username,email,password}, { headers: headers }).subscribe()
    alertify.success('Succesfully register. Redirecting to login page!');
    setTimeout(() => {
      window.location.reload();
    }, 2500)
  }

  get token() {
    return localStorage.getItem('currentUserToken')
  }

  profile() {
    return this.http.get<any>(this.path + '/users/profile')
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  logout(){
    localStorage.removeItem("currentUser")
    localStorage.removeItem("currentUserToken")
  }
}
