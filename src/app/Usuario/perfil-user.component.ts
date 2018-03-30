import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'perfil-user',
  templateUrl: 'perfil-user.html'
})
export class PerfilUserComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
  }

  ngOnInit() {
    console.log('perfil-user.component.ts cargado');
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
