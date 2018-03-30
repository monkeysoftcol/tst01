import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'solicitud-red',
  templateUrl: 'solicitud-red.html'
})
export class SolicitudRedComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
  }

  ngOnInit() {
    console.log('admin-redes.component.ts cargado');
  }

 }
