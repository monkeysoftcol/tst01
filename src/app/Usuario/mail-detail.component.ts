import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'mail-detail',
  templateUrl: 'mail_detail.html'
})
export class MailDetailComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
  }

  ngOnInit() {
    console.log('mail-detail.component.ts cargado');
    this.consultarDetalleEmail();
  }

  consultarDetalleEmail(){
    this._route.params.forEach((params: Params) => {
      let idEmail = params['id'];
      console.log("Consultar el detalle del correo "+idEmail);
    });
  }

  respondeCorreo(id){
    alert("Responde correo "+id);
  }

  imprimirCorreo(id){
    alert("Impripir correo "+id);
  }

  eliminarCorreo(id){
    alert("Eliminar correo "+id);
  }

  reenviarCorreo(id){
    alert("Reenviando correo "+id);
  }

}
