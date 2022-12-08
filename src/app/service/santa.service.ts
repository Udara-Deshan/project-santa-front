import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SantaService {
  private _currentSantaNo!: string;
  private _currentSantaName!:string;
  private _currentGifterName!:string;
  private _routeState=false;
  private _selectState=false;


  get selectState(): boolean {
    return this._selectState;
  }

  set selectState(value: boolean) {
    this._selectState = value;
  }

  get currentGifterName(): string {
    return this._currentGifterName;
  }

  set currentGifterName(value: string) {
    this._currentGifterName = value;
  }

  get currentSantaNo(): string {
    return this._currentSantaNo;
  }

  set currentSantaNo(value: string) {
    this._currentSantaNo = value;
  }

  get currentSantaName(): string {
    return this._currentSantaName;
  }

  set currentSantaName(value: string) {
    this._currentSantaName = value;
  }

  get routeState(): boolean {
    return this._routeState;
  }

  set routeState(value: boolean) {
    this._routeState = value;
  }
}
