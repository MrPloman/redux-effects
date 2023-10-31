import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadUser } from 'src/app/store/actions/user.actions';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit() {}

  irUser(id: string) {
    if (!id) {
      return;
    }
    this.router.navigate(['/usuario', id]);
  }
}
