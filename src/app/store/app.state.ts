import { UserState } from './states/user.state';
import { UsersState } from './states/users.state';
export interface AppState {
  users: UsersState;
  user: UserState;
}
