import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'https://reqres.in/api';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http
      .get(`${this.url}/users?per_page=6`)
      .pipe(map((resp: any) => resp['data']));
  }
  getUser(id: string) {
    return this.http
      .get(`${this.url}/users?id=${id}`)
      .pipe(map((resp: any) => resp['data']));
  }
}
