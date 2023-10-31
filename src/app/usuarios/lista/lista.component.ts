import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/usuario.service';
import { User } from '../../models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [],
})
export class ListaComponent implements OnInit {
  usuarios: User[] = [];

  constructor(public usuarioService: UserService) {}

  ngOnInit() {
    this.usuarioService.getUsers().subscribe((users) => {
      console.log(users);
      this.usuarios = users;
    });
  }
}
