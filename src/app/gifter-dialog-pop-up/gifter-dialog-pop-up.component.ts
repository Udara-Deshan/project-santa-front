import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-gifter-dialog-pop-up',
  templateUrl: './gifter-dialog-pop-up.component.html',
  styleUrls: ['./gifter-dialog-pop-up.component.scss']
})
export class GifterDialogPopUpComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<GifterDialogPopUpComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
  }

}
