
import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';

//--- libreria para mapear objetos
import 'rxjs/add/operator/map';
//--- libreria para recoger respuestas en ajax al servidor
import {Observable} from 'rxjs/Observable';
import { Mensaje } from '../Models/mensaje';
import {GLOBAL} from '../General/global';

@Injectable()
export class AuthenticationService{

	public url:string;
	public identity;
	public token;

	constructor(private _http: HttpClient){
		this.url = GLOBAL.url;
		console.log(this.url);
	}

  login(username: string, password: string) {
      //Aqui implementar llamado al backend
      localStorage.setItem('currentUser','jhavierc');
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      //ws para terminar la sesion en el backend
  }


}
