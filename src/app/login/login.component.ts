// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private authService: AuthenticateService) { }

  ngOnInit(): void {
    sessionStorage.setItem('token', '');
  }

  invalidCredentials: boolean = false;
  loginForm = new FormGroup({
    userId: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    this.invalidCredentials = false;

    console.log(this.loginForm.value.userId);
    console.log(this.loginForm.value.password);

    // let validateUrl: string = "http://localhost:8080/user/getuser?userid={0}";
    // validateUrl = validateUrl.replace("{0}", this.loginForm.value.userId);
    this.authService.fetchAuthenticationToken({ "userid": this.loginForm.value.userId, "password": this.loginForm.value.password }).subscribe((token: any) => {
      console.log(token);
      let t = token.token;
      sessionStorage.setItem('token', t)
      // btoa(this.loginForm.value.userId + ':' + this.loginForm.value.password));
      console.log(sessionStorage.getItem('token'));
      this.router.navigate(['persionerInput']);
    }, (error: any) => {
      this.invalidCredentials = true;
      console.log(error);
    });
  }
}