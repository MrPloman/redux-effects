import { User } from '../../models/usuario.model';
export interface UserState {
  user: User | undefined;
  loaded: boolean;
  loading: boolean;
  error: any;
}
