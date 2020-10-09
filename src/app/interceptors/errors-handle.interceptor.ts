import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorsHandleInterceptor implements HttpInterceptor {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      panelClass: 'error-snackbar',
    });
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          const msg = err.error.message ? err.error.message : 'Unknown Error';
          this.openSnackBar(msg, '');
        }
        return throwError(err);
      })
    );
  }
}

export const ErrorHandler = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorsHandleInterceptor,
  multi: true,
};
