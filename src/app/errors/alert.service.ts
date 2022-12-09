import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {
  HttpHeaderResponse,
  HttpProgressEvent,
  HttpRequest,
  HttpResponse,
  HttpSentEvent,
  HttpUserEvent
} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(private dialog: MatDialog) { }

  handle(request: HttpRequest<any>,
         evt: HttpSentEvent | HttpHeaderResponse |
           HttpResponse<any> | HttpProgressEvent |
           HttpUserEvent<any>): void{
    if (evt instanceof HttpResponse) {
      if (request.method === 'GET'){
      }else {
        if (evt.body.code === 404){
          window.alert(evt.body.data);
        }      }
    }
  }

}
