import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {UserAuth} from '../models/users/UserAuth';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {User} from '../models/users/User';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private currentUserSubject = new BehaviorSubject<UserAuth>(JSON.parse(localStorage.getItem('currentUser')));
  public currentUser = this.currentUserSubject.asObservable();
  baseUrl = environment.baseUrl + '/api/users';

  constructor(private http: HttpClient) {
  }

  public get currentUserValue(): UserAuth {
    return this.currentUserSubject.value;
  }

  login(loginData: User) {
    return this.http.post<any>(this.baseUrl + '/login', JSON.stringify(loginData), httpOptions)
      .pipe(map(user => {
        if (user && user.bearerToken) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  getAll() {
    return this.http.get<User[]>(this.baseUrl);
  }
}
