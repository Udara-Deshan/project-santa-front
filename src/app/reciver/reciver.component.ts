import { Component, OnInit } from '@angular/core';
import {SantaService} from "../service/santa.service";
import {ApiService} from "../service/api.service";
import {MatDialog} from "@angular/material/dialog";
import {GifterDialogPopUpComponent} from "../gifter-dialog-pop-up/gifter-dialog-pop-up.component";

@Component({
  selector: 'app-reciver',
  templateUrl: './reciver.component.html',
  styleUrls: ['./reciver.component.scss']
})
export class ReciverComponent implements OnInit {


  constructor(public santaService: SantaService,
              private apiService: ApiService,
              private d: MatDialog) {
  }

  ngOnInit(): void {
    this.d.open(GifterDialogPopUpComponent, {
        width: '500px',
        height: '500px',
        closeOnNavigation: false,
        disableClose: true,
        data: {
          santaName: this.santaService.currentSantaName,
          gifter: this.santaService.currentGifterName,
        }
      }
    );
  }


}
