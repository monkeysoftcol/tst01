import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'map-redes',
  templateUrl: 'map-redes.html'
})
export class MapRedesComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
  }

  ngOnInit() {
    console.log('map-redes.component.ts cargado');
  }

 }
