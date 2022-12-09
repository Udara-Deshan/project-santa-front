import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SantaService} from "./santa.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _baseUrl = 'https://localhost:8081/api/v1'
  constructor(
    private httpClient: HttpClient,
    private s:SantaService
  ) {
  }

  public log(memberNo: string,initName:string):Observable<any> {

    return this.httpClient.get(this._baseUrl,{
      params:{
        memberNo,
        initName

      }
    })
  }
  public santaSelect(memberNo:string,number:number){
    const initName=this.s.currentSantaInitName;

    return this.httpClient.put(this._baseUrl,{},{
      params:{
        memberNo,
        number,
        initName
      }
    })
  }

  public getSantaCount(memberNo:string){
    const initName=this.s.currentSantaInitName;
    return this.httpClient.get(this._baseUrl+'/count',{
      params:{
        memberNo,
        initName
      }
    })
  }
}
