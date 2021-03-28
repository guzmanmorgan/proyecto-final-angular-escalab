import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private isLogged: boolean;

  constructor(
    private firebaseSerice: FirebaseService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.firebaseSerice.currentUSer().then(resp => {
        console.log('resp guard', resp);
        if (resp != null) {
          console.log('guard pass!!');
          this.isLogged = true;
        } else {
          this.isLogged = false;
          window.alert('Login to your account');
          this.router.navigate(['/login']);
        }
      })
      return this.isLogged;
    }

}