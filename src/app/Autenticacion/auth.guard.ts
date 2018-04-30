import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            // Validar si hay sesion y el token es valido
            return true;
        }
        console.log('Guard en acccion>>>');
        //original, descomentar
        //this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
        //return false;

        //Quitar esta linea
        return true;
    }
}
