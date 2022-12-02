import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-santa-select',
  templateUrl: './santa-select.component.html',
  styleUrls: ['./santa-select.component.scss']
})
export class SantaSelectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
numArray=Array.from({length: 115}, (_, index) => index + 1);
  isSelected=false;
selected=0;

  click(num:number) {
    this.selected=num;
    this.isSelected=true;
  }
}
