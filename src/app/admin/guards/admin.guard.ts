import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import * as fromPublicStore from '@public/store';
import * as fromPublicActions from '@public/store/actions';
import * as fromPublicSelectors from '@public/store/selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminGuard implements CanActivate {
  private token$: Observable<string>;
  private token: string = '';

  constructor(
    private router: Router,
    private publicStore: Store<fromPublicStore.PublicState>
  ) {
    this.token$ = publicStore.select(fromPublicSelectors.getTokenState);
    this.token$.subscribe(token => {
      this.token = token;
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.token) {
      return true;
    } else if (!this.token) {
      // TODO: user action store fron redirect to login
      this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
    }
    return false;
  }
}
