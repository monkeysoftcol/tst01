
import {Injectable} from '@angular/core';
//--- para ws
import {HttpClient} from '@angular/common/http';
//--- libreria para mapear objetos
import 'rxjs/add/operator/map';
//--- libreria para recoger respuestas en ajax al servidor
import {Observable} from 'rxjs/Observable';

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

	test(){
		return this._http.get(this.url+'auth/adminmudanzas/test', {}).subscribe(
				response => console.log(response),
				error => console.log(error.error)
			);
	}

	getJwtToken(solicitud){
		console.log("Llamando al servicio de HistoricoConductor");
		let json = JSON.stringify(solicitud);

		let params = json;

		return this._http.post(this.url+'hconductorServices/save', params, {}).subscribe(
        response => console.log(response),
        error => console.log(error.error)
      );


		/*return this._http.post(this.url+'hconductorServices/save', params).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );*/
	}


	signup(user_to_login,gethash=null){

		if(gethash!=null){
			user_to_login.gethash = gethash;
		}
		let json = JSON.stringify(user_to_login);
		let params = json;
		let headers = new Headers({'Content-Type':'application/json'});
		//{headers:headers}
		return 0;//this._http.post(this.url+'login', params, {}).map(res => res.json());
	}

	register(user_to_register){
		let json = JSON.stringify(user_to_register);
		let params = json;
		let headers = new Headers({'Content-Type':'application/json'});
		return 0;//this._http.post(this.url+'register', params, {headers:headers}).map(res => res.json());
	}

	updateUser(user_to_update){
		let json = JSON.stringify(user_to_update);
		let params = json;
		let headers = new Headers({
			'Content-Type':'application/json', 'Authorization':this.getToken()
			});
		return 0;//this._http.put(this.url+'update-user/'+user_to_update._id, params, {headers:headers}).map(res => res.json());
	}

	getIdentity(){
		let identity = JSON.parse(localStorage.getItem('identity'));
		if(identity != undefined){
			this.identity = identity;
		} else {
			this.identity = null;
		}
		return this.identity;
	}

	getToken(){
		let token = localStorage.getItem('access_token');
		if(token != undefined){
			this.token = token;
		} else {
			this.token = null;
		}
		return this.token;
	}
}
