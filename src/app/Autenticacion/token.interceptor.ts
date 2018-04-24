import { Injectable } from '@angular/core';

import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor,HttpHeaders,HttpResponse,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  public token:string;
  constructor() {
    this.token = localStorage.getItem('access_token');

    console.log("=====TokenInterceptor ok======");
    console.log(this.token);
  }
  //obtener del localStorage
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Interceptor peticiones http a lo servicios");
    let token ="eyJhbGciOiJIUzUxMiJ9.eyJyZWQiOiIxMDAwIiwic3ViIjoiQ2FybG9zIENlcGVkYSIsInBhc3N3b3JkIjpudWxsLCJpcCI6IjEyNy4wLjAuMSIsImlzcyI6ImtoYXJsb3NqQGdtYWlsLmNvbSIsImV4cCI6MTUyNDY4MTgxOSwiaWF0IjoxNTI0NTk1NDE5LCJqdGkiOiI5YmRiMjEwMy0yYzQ2LTRiMDctYTU4OS02MTgxM2Y2NjI1OWEiLCJ1c2VybmFtZSI6bnVsbH0.Jgl_g-M-OYsn7EUDB3slt8WgCnwmnsJCHjx3c7NJqDwlTSsP4XFfrC8PRrX6NDMtqTTQwLRwme4aJNGfIzcg5w";
    let headers = new HttpHeaders(
      {
        'Content-Type':'application/json',
        'Authorization': 'Bearer '+token,
        'X_HEIGBORHOOD_USER':'kharlosj@gmail.com',
        'X_HEIGBORHOOD_RED':'1000'
      }
    );

    request = request.clone({headers: headers});
    //return next.handle(request);

    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        console.log(">>>Sesion activa!!!");
      }
     }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          console.log(">>Sesion vencida!!!, redirecciona al Login");
          alert("Su sesión a expirado, ingrese nuevamente");
          return err.error;
        }
      }
     });
  }

  /*intercept(req: HttpRequest, next: HttpHandler): Observable<HttpEvent> {

    console.log("Interceptor peticiones http a lo servicios");
    // Obtenemos el token
.    //const token = this.auth.getToken();
    // Importante: modificamos de forma inmutable, haciendo el clonado de la petición

    //let headers = new Headers({'Content-Type':'application/json'});
    const authReq = req.clone({headers: req.headers.set('Authorization', '22222')});
    // Pasamos al siguiente interceptor de la cadena la petición modificada
    return next.handle(authReq);
  }*/
}
