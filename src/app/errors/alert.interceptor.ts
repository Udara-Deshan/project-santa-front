import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {catchError, Observable, tap, throwError} from 'rxjs';
import {ErrorService} from "./error.service";
import {AlertService} from "./alert.service";

@Injectable()
export class AlertInterceptor implements HttpInterceptor {


  constructor(private errorService:ErrorService,
              private alertService:AlertService) {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap(evt => {
        this.alertService.handle(request, evt);
      }),
      catchError(err => {
        console.log(err)
        this.errorService.handle(err.error.data);
        return throwError(err.error.message || err.statusText);
      }));  }
}
