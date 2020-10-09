import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse, HttpResponse, HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';



@Injectable()
export class MockApiRestInterceptor implements HttpInterceptor {

  users = [{
    id: '123456',
    password: '1234',
    name: 'Erick Van Hellen',
    lastLogin: new Date(),
    avatar:'https://randomuser.me/api/portraits/thumb/lego/6.jpg',
    accounts: [],
    wallets: []
  },{
    id: '987654321',
    password: '1234',
    name: 'Persona prueba',
    lastLogin: new Date(),
    avatar: 'https://randomuser.me/api/portraits/thumb/lego/8.jpg',
    accounts: [],
    wallets: []
  }];
  
  allAccounts =  [{
    idUser:'123456',
    accountsUser: [
        {
            id: '666555444',
            name: "travel",
            icon: "payments",
            type: "Checking",
            status: 'Active',
            currency: 'USD',
            balance: 3500,
            transactions: []
        },{
            id: '777444555',
            name: "University",
            icon: "credit_card",
            type: "Saving",
            status: 'Active',
            currency: 'USD',
            balance: 600.5,
            transactions: []
        },{
            id: '66655444',
            name: "npi",
            icon: "credit_card",
            type: "Saving",
            status: 'Desactived',
            currency: 'USD',
            balance: 1.14,
            transactions: []
        }
    ]
  },
  {
    idUser:'987654321',
    accountsUser: [
    {
        id: '99999999999',
        name: "travels",
        icon: "card_travel",
        type: "Checking",
        status: 'Active',
        currency: 'USD',
        balance: 1000.1,
        transactions: []
    }]  
  }];
  
  transactions = [{
    id: '1',
    idAccount: '666555444',
    date: new Date(2020,10,8),
    description: 'Nexflix',
    currency: 'USD',
    value: 300
  },{
    id: '2',
    idAccount: '666555444',
    date: new Date(2020,9,30),
    description: 'Pullandbear',
    currency: 'USD',
    value: -500
  },{
    id: '3',
    idAccount: '666555444',
    date: new Date(2020,9,4),
    description: 'Mercadolibre',
    currency: 'USD',
    value: 1000
  },{
    id: '4',
    idAccount: '666555444',
    date: new Date(2020,8,5),
    description: 'Facebook',
    currency: 'USD',
    value: -200
  },{
    id: '5',
    idAccount: '666555444',
    date: new Date(2020,7,3),
    description: 'Aliexpress',
    currency: 'USD',
    value: 65
  },{
    id: '6',
    idAccount: '666555444',
    date: new Date(2020,5,6),
    description: 'PSN',
    currency: 'USD',
    value: -250
  },{
    id: '7',
    idAccount: '666555444',
    date: new Date(2020,3,23),
    description: 'Rappi',
    currency: 'USD',
    value: -10
  },{
    id: '8',
    idAccount: '666555444',
    date: new Date(2020,1,27),
    description: 'Mercadolibre',
    currency: 'USD',
    value: 785
  },{
    id: '9',
    idAccount: '666555444',
    date: new Date(2020,1,25),
    description: 'Amazon',
    currency: 'USD',
    value: 548
  },{
    id: '10',
    idAccount: '666555444',
    date: new Date(2020,1,1),
    description: 'Netflix',
    currency: 'USD',
    value: -698
  }];

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const {url, body, method, headers} = request;
    switch (true) {
      case (url.endsWith('/signin') && method === 'POST'):
        return this.signin(body);    
      case (url.endsWith('/accounts') && method === 'POST'):
        return this.getAccountsByUser(body, headers);
      case (url.endsWith('/transactions') && method === 'POST'):
        return this.getTransacctions(body, headers);     
      case (url.endsWith('/newProduct') && method === 'POST'):
        return this.getNewProduct(body, headers);     
      default:
        return next.handle(request);
    }
  }

  signin(body){
    const token = 'super secure token';
    const { login, password } = body;
    const user = this.users.find(element => element.id === login && element.password === password);
    if(!user) return this.errorResponse('Username or password is incorrect');
    delete user.password;
    return this.successResponse({token,user});
  }

  getAccountsByUser(body, headers){
    if(!this.isLoggedIn(headers))return this.unauthorized();
    const id = body;
    const accounts = this.allAccounts.find(item =>item.idUser === id);    
    return this.successResponse(accounts.accountsUser);
  }

  getTransacctions(body, headers){
    if(!this.isLoggedIn(headers))return this.unauthorized();
    const idAccount = body;
    const filteredTransaction = this.transactions.filter(item => item.idAccount === idAccount);
    if(!filteredTransaction)return this.errorResponse('Without transactions');    
    return this.successResponse(filteredTransaction);
  }

  getNewProduct(body, headers){
    if(!this.isLoggedIn(headers))return this.unauthorized();
    const {id, product, cellphone, monthly } = body;
    let newProduct = {
      id:`${Math.random()*Math.pow(10, 9)} `,
      name: "travels",
      icon: "card_travel",
      type: product,
      status: 'pending',
      currency: 'USD',
      balance: monthly,
      transactions: []
    }
    let user = this.allAccounts.find(item => item.idUser === id);
    user.accountsUser = [...user.accountsUser,newProduct];
    
    return this.successResponse();
  }

   errorResponse(message) {
    return throwError(new HttpErrorResponse({ error: { message } }));
  }

   successResponse(body?) {
    return of(new HttpResponse({ status: 200, body }))
  }

  unauthorized() {
    return throwError({ status: 401, error: { message: 'Unauthorized' } });
}

  isLoggedIn(headers) {
    return headers.get('Authorization') === 'Bearer super secure token';
}

}

export const MockApiRest = {
  provide: HTTP_INTERCEPTORS,
  useClass: MockApiRestInterceptor,
  multi: true
};
