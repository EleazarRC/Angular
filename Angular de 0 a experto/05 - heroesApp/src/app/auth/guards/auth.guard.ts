// Instalar guard  ng g guard auth/guards/auth

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor( private authService: AuthService,
                private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     /*  if( this.authService.auth.id ) {
        return true;
      }
        console.log('Bloqueado por el AuthGuard - Can Activate');

        return false; */
        return this.authService.verificaAutenticacion()
                .pipe(
                  tap( estaAuthenticado => {
                    if( !estaAuthenticado ){
                      this.router.navigate(['/auth.login'])
                    }
                  })
                )
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

      return this.authService.verificaAutenticacion().pipe(
        tap( estaAuthenticado => {
          if( !estaAuthenticado ){
            this.router.navigate(['/auth.login'])
          }
        })
      )
    /*   if( this.authService.auth.id ) {
        return true;
      }
       console.log('Bloqueado por el AuthGuard - Can Load');
        return false; */
  }
}
