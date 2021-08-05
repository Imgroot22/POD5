import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';
import { PensionManagementService } from '../pension-management.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  msg: string = "sdfg";
  info: string = "sdfg";
  constructor(private pensionService: PensionManagementService, private router: Router, private authService: AuthenticateService) { }
  token: string = '';
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
    this.pensionService.getConformation().subscribe((data: any) => {
      console.log(data);
      let m = data.msg;
      let inf = data.info;
      if (m) {
        this.msg = m;
      }
      if (inf) {
        this.info = inf;
      }
    });
  }
  onClicked() {
    this.router.navigate(['persionerInput']);
  }

}

