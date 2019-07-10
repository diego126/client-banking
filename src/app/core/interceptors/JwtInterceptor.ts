import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UsersService} from '../services/users.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private userService: UsersService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const currentUser = this.userService.currentUserValue;
    if (currentUser && currentUser.bearerToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.bearerToken}`,
          'Content-Type': 'application/json'
        }
      });
    }

    return next.handle(request);
  }

}
