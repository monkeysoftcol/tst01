import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'perfil-friend',
  templateUrl: 'perfil-fiend.html'
})
export class PerfilFriendComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
  }

  ngOnInit() {
    console.log('perfil-fiend.component.ts cargado');
    this.cargarInfoFriend();
  }

  cargarInfoFriend(){
    this._route.params.forEach((params: Params) => {
      let idFriend = params['id'];
      console.log("Consultar informacion perfil amigo "+idFriend);
    });
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
