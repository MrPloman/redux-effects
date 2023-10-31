import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/usuario.model';
import { loadUser } from 'src/app/store/actions/user.actions';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [],
})
export class UserComponent implements OnInit {
  public user: User | undefined = undefined;
  public loading: boolean = true;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      if (params && params.id) {
        this.store.dispatch(loadUser({ id: params.id }));
      }
    });
    this.store.select('user').subscribe((state) => {
      this.loading = state.loading;
      if (state.loaded && !state.loading) this.loading = false;
      if (state && state.user) this.user = state.user;
    });
  }
}
