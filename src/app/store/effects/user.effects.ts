import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, pipe, tap, map, catchError, of, switchMap } from 'rxjs';
import { UserService } from 'src/app/services/usuario.service';
import { AllUsersActions } from '../actions';
import { User } from 'src/app/models/usuario.model';
import { Action } from '@ngrx/store';
@Injectable({
  providedIn: 'root',
})
export class UserEffects {
  constructor(private $actions: Actions, private usersService: UserService) {}
  public loadUser = createEffect(() =>
    this.$actions.pipe(
      ofType(AllUsersActions.userActions.loadUser),
      switchMap((action: { type: string; id: string }) =>
        this.usersService.getUser(action.id).pipe(
          map((user: User) =>
            AllUsersActions.userActions.loadUserSuccess({ user: user })
          ),
          catchError((err) =>
            of(
              AllUsersActions.userActions.loadUserError({
                payload: {
                  name: err.name,
                  status: err.status,
                  error: err.error,
                },
              })
            )
          )
        )
      )
    )
  );
}
