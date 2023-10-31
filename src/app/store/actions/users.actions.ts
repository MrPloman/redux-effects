import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/usuario.model';
export const loadUsers = createAction('[Load Users]');
export const loadUsersSuccess = createAction(
  '[Load Users Success]',
  props<{ users: User[] }>()
);
export const loadUsersError = createAction(
  '[Load Users Error]',
  props<{ payload: any }>()
);
