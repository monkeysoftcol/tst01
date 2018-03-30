import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'admin-redes',
  templateUrl: 'admin-redes.html'
})
export class AdminRedesComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
  }

  ngOnInit() {
    console.log('admin-redes.component.ts cargado');
  }

 }
