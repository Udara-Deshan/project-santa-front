import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private dialog: MatDialog,
  ) { }

  handle(error: any): void {
    console.log(error)
    if (error){
      window.alert(error);

    }
    window.alert('error');

  }

}
