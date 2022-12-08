import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _baseUrl = 'http://localhost:8090/api/v1'

  constructor(
    private httpClient: HttpClient
  ) {
  }

  public log(memberNo: string):Observable<any> {
    return this.httpClient.get(this._baseUrl,{
      params:{
        memberNo
      }
    })
  }
  public santaSelect(memberNo:string,number:number){
    return this.httpClient.put(this._baseUrl,{},{
      params:{
        memberNo,
        number
      }
    })
  }

  public getSantaCount(memberNo:string){
    return this.httpClient.get(this._baseUrl+'/count',{
      params:{
        memberNo
      }
    })
  }
}
