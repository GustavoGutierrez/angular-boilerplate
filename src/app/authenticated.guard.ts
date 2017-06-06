import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticatedGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    let LOCALSTORAGE_AUTH:string = 'authentication';
    if (localStorage.getItem(LOCALSTORAGE_AUTH)) {
      return true;
    }

    // not logged in so redirect to login page
    this.router.navigate(["/authentication"]);
    return false;
  }

}
