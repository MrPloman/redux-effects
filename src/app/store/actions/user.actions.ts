import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/usuario.model';
export const loadUser = createAction('[Load User]', props<{ id: string }>());
export const loadUserSuccess = createAction(
  '[Load User Success]',
  props<{ user: User }>()
);
export const loadUserError = createAction(
  '[Load User Error]',
  props<{ payload: { name: string; status: number; error: string } }>()
);
