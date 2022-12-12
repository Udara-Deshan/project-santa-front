import {Component, OnInit} from '@angular/core';
import {SantaService} from "../service/santa.service";
import {ApiService} from "../service/api.service";
import {MatDialog} from "@angular/material/dialog";
import {GifterDialogPopUpComponent} from "../gifter-dialog-pop-up/gifter-dialog-pop-up.component";

@Component({
  selector: 'app-santa-select',
  templateUrl: './santa-select.component.html',
  styleUrls: ['./santa-select.component.scss']
})
export class SantaSelectComponent implements OnInit {

  numArray: any = [];
  isSelected = this.santaService.routeState;
  selected = 0;

  constructor(public santaService: SantaService,
              private apiService: ApiService,
              private d: MatDialog) {
  }

  ngOnInit(): void {
    console.log(this.isSelected)
   this.isSelected = this.santaService.selectState;
    if (!this.isSelected) {
      this.apiService.getSantaCount(this.santaService.currentSantaNo).subscribe((res: any) => {
        if (res.code == 201) {
          console.log(res)
          this.numArray = Array.from({length: res.data}, (_, index) => index + 1);
          console.log(this.numArray)
        }
      })
    } else {
      console.log('aa')
      this.d.open(GifterDialogPopUpComponent, {
          width: '500px',
          height: 'auto',
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

  click(num: number) {
    this.selected = num;
    this.isSelected = true;
    // this.d.open(GifterDialogPopUpComponent, {
    //     width: '500px',
    //     height: 'auto',
    //     closeOnNavigation: false,
    //     disableClose: true,
    //     data: {
    //       santaName: this.santaService.currentSantaName,
    //       gifter: "Oshan",
    //     }
    //   }
    // );


    this.apiService.santaSelect(this.santaService.currentSantaNo, num).subscribe((res: any) => {
      let matDialogRef = this.d.open(GifterDialogPopUpComponent, {
          width: '500px',
          height: 'auto',
        closeOnNavigation: false,
        disableClose: true,
          data: {
            santaName: this.santaService.currentSantaName,
            gifter: res.data.fullName,
          }
        }

      );

    })

    this.isSelected=false;
    this.santaService.selectState=false;
  }
}
