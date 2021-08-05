import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PensionManagementService {
  constructor(private http: HttpClient) { }
  getData(data: any) {
    console.log(data);
    let url = "http://localhost:8085/processPensionerInput";

    let dataF = {
      aadharNumber: data.aadharNumber,
      dateOfBirth: data.dateOfBirth,
      pan: data.pan,
      pensionType: data.pensionType,
      name: data.username
    };
    return this.http.post(url, dataF);
  }

  getConformation() {
    let url: string = "http://localhost:8085/disbursement";
    return this.http.get(url);
  }

}

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  userData: any;
  constructor() {
    this.userData = {};
  }
  setUserData(val: object) {
    this.userData = val;
  }
  getUserData() {
    return this.userData;
  }
}
