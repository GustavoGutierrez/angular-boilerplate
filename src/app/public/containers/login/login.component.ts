import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import * as fromActions from '@core/store/actions';
import * as fromStore from '@core/store';
import { Store } from '@ngrx/store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  moduleId: module.id,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public error$: Observable<any>;
  public globalError: HttpErrorResponse;

  constructor(
    private router: Router,
    private store: Store<fromStore.State>,
    private fb: FormBuilder
  ) {
    this.error$ = store.select(fromStore.getLoginErrorState);
  }

  ngOnInit() {
    this.store.dispatch(new fromActions.SigninError(null));

    this.loginForm = this.fb.group({
      password: ['', [Validators.minLength(3), Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });

    this.error$.subscribe((error: HttpErrorResponse) => {
      if (error != null) {
        this.globalError = error;
      }
    });
  }

  signin({
    value,
    valid,
    dirty
  }: {
      value: { email: string; password: string };
      valid: boolean;
      dirty: boolean;
    }) {
    if (dirty && valid) {
      this.store.dispatch(new fromActions.Signin(value));
    }
  }

}
