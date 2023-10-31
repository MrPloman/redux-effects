import { createReducer, on } from '@ngrx/store';
import {
  loadUsers,
  loadUsersError,
  loadUsersSuccess,
} from '../actions/users.actions';
import { UsersState } from '../states/users.state';
export const usersInitialState: UsersState = {
  users: [],
  loaded: false,
  loading: false,
  error: undefined,
};
export const usersReducers = createReducer(
  usersInitialState,

  on(loadUsers, (state) => ({ ...state, loading: true })),

  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    loaded: true,
    loading: false,
    users: [...users],
  })),

  on(loadUsersError, (state, payload) => ({
    ...state,
    loaded: false,
    loading: false,
    users: [],
    error: payload,
  }))
);
