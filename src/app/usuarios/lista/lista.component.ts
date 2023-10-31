import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../services/usuario.service';
import { User } from '../../models/usuario.model';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { loadUsers } from 'src/app/store/actions/users.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [],
})
export class ListaComponent implements OnInit, OnDestroy {
  usuarios: User[] = [];
  private usersSubscription: Subscription = new Subscription();

  constructor(
    public usuarioService: UserService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.store.dispatch(loadUsers());
    this.usersSubscription = this.store
      .select('users')
      .subscribe(({ users }) => {
        if (users) this.usuarios = users;
        else this.usuarios = [];
        this.usersSubscription.unsubscribe();
      });
  }
  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }
}
