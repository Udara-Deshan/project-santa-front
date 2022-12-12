import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ApprovalDialogComponent} from "../dialog/approval-dialog/approval-dialog.component";
import {ApprovalDialogConfig} from "../dialog/approval-dialog/ApprovalDialogConfig";

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private dialog: MatDialog,
  ) { }

  handle(error: any): void {
    console.log(error)
    if (error){
      // window.alert(error);
      this.dialog.open(ApprovalDialogComponent, {
        width: '350px',
        // height: '200px',
        data: new ApprovalDialogConfig('Error', error, '')
      });
    }
    // window.alert('error');

  }

}
