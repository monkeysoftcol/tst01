
import {Injectable} from '@angular/core';
//--- para ws
import {HttpClient} from '@angular/common/http';
//import {Http, Response, Headers} from '@angular/http';
//--- libreria para mapear objetos
import 'rxjs/add/operator/map';
//--- libreria para recoger respuestas en ajax al servidor
import {Observable} from 'rxjs/Observable';
import { Mensaje } from '../Models/mensaje';

import {GLOBAL} from '../General/global';

@Injectable()
export class TestService{

	public url:string;
	public identity;
	public token;

	constructor(private _http: HttpClient){
		this.url = GLOBAL.url;
		console.log(">>>>>>> Cargando test services constructor.....");
		console.log(this.url);
	}

	test(): Observable<Mensaje>{
		return this._http.get<Mensaje>(this.url + 'auth/adminmudanzas/test');
	}

}
