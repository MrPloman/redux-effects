import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, pipe, tap, map, catchError, of } from 'rxjs';
import { UserService } from 'src/app/services/usuario.service';
import { AllUsersActions } from '../actions';
import { User } from 'src/app/models/usuario.model';
@Injectable({
  providedIn: 'root',
})
export class UsersEffects {
  constructor(private $actions: Actions, private usersService: UserService) {}
  public loadUsers = createEffect(() =>
    this.$actions.pipe(
      ofType(AllUsersActions.usersActions.loadUsers),
      mergeMap(() =>
        this.usersService.getUsers().pipe(
          map((users: User[]) =>
            AllUsersActions.usersActions.loadUsersSuccess({ users: users })
          ),
          catchError((err) =>
            of(
              AllUsersActions.usersActions.loadUsersError({
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
