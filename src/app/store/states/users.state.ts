import { User } from '../../models/usuario.model';
export interface UsersState {
  users: User[];
  loaded: boolean;
  loading: boolean;
  error: any;
}
