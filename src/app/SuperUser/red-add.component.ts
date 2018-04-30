import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'red-add',
  templateUrl: 'red-add.html'
})
export class RedAddComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
  }

  ngOnInit() {
    console.log('red-add.component.ts cargado');
    
  }

  listarRedes(){

  }

  crearRed(){

  }

 }
