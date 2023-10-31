import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/usuario.model';
import { loadUser } from 'src/app/store/actions/user.actions';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [],
})
export class UserComponent implements OnInit, OnDestroy {
  public user: User | undefined = undefined;
  public loading: boolean = true;
  private userSubscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      if (params && params.id) {
        this.store.dispatch(loadUser({ id: params.id }));
      }
    });
    this.userSubscription = this.store.select('user').subscribe((state) => {
      this.loading = state.loading;
      if (state.loaded && !state.loading) this.loading = false;
      if (state && state.user) {
        this.user = state.user;
      }
    });
  }
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
