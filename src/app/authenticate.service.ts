import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  emitUserLoginDetails(response: any) {
    throw new Error('Method not implemented.');
  }

  public emitCartChangedEvent = new Subject<any>();
  public emitUserDetails = new Subject<any>();
  public flushCart = new Subject<boolean>();
  public emitRemoveProductFromCart = new Subject<any>();
  private userDetails: any;
  private authenticationToken: string = '';


  constructor(private http: HttpClient) { }

  setAuthToken(token: string) {
    this.authenticationToken = token
  }

  getAuthToken() {
    return this.authenticationToken;
  }

  validate(tokenDetails: string) {
    let url = "http://localhost:8085/validate"
    let token: any = {
      "token": tokenDetails
    }
    console.log(token);
    return this.http.post(url, token); // JSON.parse(JSON.stringify(token)));
  }

  fetchAuthenticationToken(userDetails: any) {
    let url: string = "http://localhost:8085/login";
    let data: any = {
      "username": userDetails.userid,
      "password": userDetails.password
    }
    return this.http.post(url, data);// JSON.parse(JSON.stringify(data)));
  }
}