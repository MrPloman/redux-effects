import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import * as reducers from './reducers';

export const AppReducers: ActionReducerMap<AppState> = {
  users: reducers.usersReducer,
  user: reducers.userReducer,
};
