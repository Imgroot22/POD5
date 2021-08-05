// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-pension-disbursement',
//   templateUrl: './pension-disbursement.component.html',
//   styleUrls: ['./pension-disbursement.component.css']
// })
// export class PensionDisbursementComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';
import { SharedService } from '../pension-management.service';

@Component({
  selector: 'app-pension-disbursement',
  templateUrl: './pension-disbursement.component.html',
  styleUrls: ['./pension-disbursement.component.css']
})
export class PensionDisbursementComponent implements OnInit {
  pensionDetail: any;
  constructor(private shareData: SharedService, private router: Router, private authService: AuthenticateService) {
    console.log(this.shareData.getUserData());
    this.pensionDetail = this.shareData.getUserData();
    if (this.pensionDetail == null || this.pensionDetail == undefined || Object.keys(this.pensionDetail).length === 0) {
      this.router.navigate(['persionerInput']);
    }
  }
  token: string = "";
  ngOnInit(): void {
    let tok = sessionStorage.getItem('token');
    if (tok != null)
      this.token = tok;
    console.log(tok);
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

  onSubmit() {
    console.log("persionerInput");
    this.router.navigate(['success']);
  }

}
