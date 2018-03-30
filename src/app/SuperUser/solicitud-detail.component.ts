import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'solicitud-detail',
  templateUrl: 'solicitud-detail.html'
})
export class SolicitudDetailComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
  }

  ngOnInit() {
    console.log('solicitud-detail.component.ts cargado');
    this.consultarDetalleRed();
  }

  consultarDetalleRed(){
    this._route.params.forEach((params: Params) => {
      let idred = params['id'];
      console.log("Consultar el detalle red "+idred);
    });
  }

 }
