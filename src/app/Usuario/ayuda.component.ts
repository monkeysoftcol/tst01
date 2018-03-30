import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'ayuda-user',
  templateUrl: 'ayuda_client.html'
})
export class AyudaUserComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
  }

  ngOnInit() {
    console.log('ayuda-user.component.ts cargado');
  }

 }
