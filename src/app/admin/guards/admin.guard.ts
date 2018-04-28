import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import * as fromStore from '@core/store';
import * as fromActions from '@core/store/actions';
import * as fromSelectors from '@core/store/selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminGuard implements CanActivate {
  private token$: Observable<string>;
  private token: string = '';

  constructor(
    private router: Router,
    private store: Store<fromStore.State>
  ) {
    this.token$ = store.select(fromSelectors.getTokenState);
    this.token$.subscribe(token => {
      this.token = token;
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.token) {
      return true;
    } else if (!this.token) {
      this.store.dispatch(new fromActions.Go({
        path: ['/'],
        query: { queryParams: { returnUrl: state.url } }
      }));
    }
    return false;
  }
}
