import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginStatus: boolean = false;

  constructor(@Inject(HttpClient) private http: HttpClient) { }

  public CheckEmailAndPassword(email: string, password: string): Observable<User> {
    return this.http.post<User>("/checkmailandpassword", { responseType: 'json' });
  }
}
