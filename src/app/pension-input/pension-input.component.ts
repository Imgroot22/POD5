import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';
import { PensionManagementService, SharedService } from '../pension-management.service';

@Component({
  selector: 'app-pensioner-input',
  templateUrl: './pension-input.component.html',
  styleUrls: ['./pension-input.component.css']
})
export class PensionInputComponent implements OnInit {

  token: string = '';
  invalidCredentials: boolean = false;
  constructor(private http: HttpClient, private pensionService: PensionManagementService, private router: Router, private authService: AuthenticateService, private shareData: SharedService) { }
  ngOnInit(): void {
    let tok = sessionStorage.getItem('token');
    if (tok != null)
      this.token = tok;
    console.log(tok);
    console.log("tokk");
    this.authService.validate(this.token).subscribe((response: any) => {
      console.log(response);
      let message = response.message;
      console.log(message);
      if (message != 'Success') {
        this.router.navigate(['']);
      }
    }, (error: any) => {
      this.router.navigate(['']);
    });
  }

  PersionerInput = new FormGroup({
    username: new FormControl(''),
    dateOfBirth: new FormControl(''),
    pan: new FormControl(''),
    aadharNumber: new FormControl(''),
    pensionType: new FormControl('', Validators.required)
  });

  get f() {
    return this.PersionerInput.controls;
  }

  submit() {
    console.log(this.PersionerInput.value);
  }
  
  checkName($event:any){
    var regName = new RegExp('^[A-Z a-z]{3,15}$');
    this.nameCheck = this.PersionerInput.value.username.test(regName);
    this.nameCheck = !this.nameCheck;
    alert(this.nameCheck);
    
  }

  checkAadhar($event:any){
    
    let regAadhar = new RegExp('^[0-9]{12}$');
    this.aadharCheck = this.PersionerInput.value.aadharNumber.test(regAadhar);
    this.aadharCheck = !this.aadharCheck;
    alert(this.aadharCheck);
  }

  onSubmit() {
    this.invalidCredentials = false;

    // console.log(this.PersionerInput.value.username);
    // console.log(this.PersionerInput.value.dateOfBirth);
    // console.log(this.PersionerInput.value.pan);
    // console.log(this.PersionerInput.value.aadharNumber);
    // console.log();
    // console.log(this.PersionerInput.value);
    // this.router.navigate(['']);


    this.pensionService.getData(this.PersionerInput.value).subscribe((response: any) => {
      console.log(response);
      if (response == null) {
        this.invalidCredentials = true;
        // alert("invalid input");
      } else {
        this.shareData.setUserData(response);
        this.router.navigate(['persionDisbursement']);
      }
    }, (error: any) => {
      // alert("invalid input");
      this.invalidCredentials = true;
      console.log(error);
    });
  }
}
