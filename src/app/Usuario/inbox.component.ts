import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'inbox',
  templateUrl: 'inbox.html'
})
export class InboxComponent implements OnInit{

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
  }

  ngOnInit() {
    console.log('mail-detail.component.ts cargado');
    this.consultarBandeja();
  }

  consultarBandeja(){
    this._route.params.forEach((params: Params) => {
      let bandeja = params['bandeja'];
      console.log("Consultar la badeja del correo "+bandeja);
    });
  }
 }
