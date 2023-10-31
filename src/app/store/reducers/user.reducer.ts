import { createReducer, on } from '@ngrx/store';
import {
  loadUser,
  loadUserError,
  loadUserSuccess,
} from '../actions/user.actions';
import { AppState } from '../app.state';
import { UserState } from '../states/user.state';
import { User } from 'src/app/models/usuario.model';
export const UserInitialState: UserState = {
  user: undefined,
  loaded: false,
  loading: false,
  error: undefined,
};
export const _userReducers = createReducer(
  UserInitialState,

  on(loadUser, (state) => ({ ...state, loading: true })),

  on(loadUserSuccess, (state, { user }) => ({
    ...state,
    loaded: true,
    loading: false,
    user: { ...user },
  })),

  on(loadUserError, (state, { payload }) => ({
    ...state,
    loaded: false,
    loading: false,
    user: undefined,
    error: { name: payload.name, error: payload.error, status: payload.status },
  }))
);
export function userReducer(state: any, action: any) {
  return _userReducers(state, action);
}
