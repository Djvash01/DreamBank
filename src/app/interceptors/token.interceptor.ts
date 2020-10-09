import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse, HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authService.getToken();
    let tokenizeRequest = request;
    if(token){
      tokenizeRequest = request.clone({
        setHeaders:{
          Authorization:`Bearer ${token}`
        }
      });
    }
    return next.handle(tokenizeRequest).pipe(
      catchError((err: HttpErrorResponse) => {
        if(err.status === 401){
          this.authService.logout();
          this.router.navigateByUrl('/login');
        }
        return throwError(err);
      })
    );
  }
}

export const Token_Interceptor = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true
}
