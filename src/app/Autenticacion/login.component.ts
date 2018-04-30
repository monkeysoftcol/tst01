import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';
import 'rxjs/add/operator/map';


@Component({
  selector: 'login',
  templateUrl: 'login.template.html'
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: string;


  constructor(private route: ActivatedRoute,
    private router: Router,
    private _authenticationService: AuthenticationService){

  }

  ngOnInit() {
    this._authenticationService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
      this.loading = true;
      this._authenticationService.login(this.model.username, this.model.password)
          .subscribe(
              data => {
                  console.log(">>>> LOGIN OK, REDIRECCION A A :"+this.returnUrl);
                  this.router.navigate([this.returnUrl]);
              },
              error => {
                  //this.alertService.error(error);
                  console.log('Error login = '+error);
                  this.loading = false;
              });
  }

}
