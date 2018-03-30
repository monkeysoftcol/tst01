import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'contacts-user',
  templateUrl: 'contacts.html'
})
export class ContactsComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
  }

  ngOnInit() {
    console.log('contacts-user.component.ts cargado');
    this.cargarListaContactos();
  }

  cargarListaContactos(){
    this._route.params.forEach((params: Params) => {
      let tipo = params['tipo'];
      console.log("Cargar contactos por tipo "+tipo);
    });
  }

 }
