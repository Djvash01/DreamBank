import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse, HttpResponse, HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';

let users = [{
  id: '123456',
  password: '1234',
  name: 'Erick Van Hellen',
  lastLogin: new Date(),
  avatar:'https://randomuser.me/api/portraits/thumb/lego/6.jpg',
  accounts: [],
  wallets: [],
  notifications: [],
  messages: [],
},{
  id: '987654321',
  password: '1234',
  name: 'Persona prueba',
  lastLogin: new Date(),
  avatar: 'https://randomuser.me/api/portraits/thumb/lego/8.jpg',
  accounts: [],
  wallets: [],
  notifications: [],
  messages: [],
}];

@Injectable()
export class MockApiRestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const {url, body, method, headers} = request;
    switch (true) {
      case (url.endsWith('/signin') && method === 'POST'):
        return this.signin(body);    
      default:
        return next.handle(request);
    }
  }

  signin(body){
    const token = 'super secure token';
    const { login, password } = body;
    const user = users.find(element => element.id === login && element.password === password);
    if(!user) return this.errorResponse('Username or password is incorrect');
    delete user.password;
    return this.successResponse({token,user});
  }

   errorResponse(message) {
    return throwError(new HttpErrorResponse({ error: { message } }));
  }

   successResponse(body?) {
    return of(new HttpResponse({ status: 200, body }))
  }
}

export const MockApiRest = {
  provide: HTTP_INTERCEPTORS,
  useClass: MockApiRestInterceptor,
  multi: true
};
