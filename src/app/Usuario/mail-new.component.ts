import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'mail-new',
  templateUrl: 'mail_new.html'
})
export class MailNewComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
  }

  ngOnInit() {
    console.log('mail-new.component.ts cargado');
  }


  enviarCorreo(){
    alert("Enviando correo...");
  }

  editarBorrador(){
    alert("Editar correo...");
  }

  deshacerBorrador(){
    alert("Deshacer correo...");
      this._router.navigate(['/inbox','inbox']);
  }

}
