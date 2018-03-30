import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'mail-menu',
  templateUrl: 'mail_menu.html'
})
export class MailMenuComponent implements OnInit {

  public tipoBandeja:string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
  }

  ngOnInit() {
    console.log('mail-menu.component.ts cargado');
    this.consultarEmails();
  }

  consultarEmails(){
    this._route.params.forEach((params: Params) => {
      let bandeja = params['bandeja'];
      console.log("Consultar emails por tipo "+bandeja);
    });
  }
  

}
