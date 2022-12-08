import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {SantaService} from "../service/santa.service";
import {ApiService} from "../service/api.service";

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  openForm!: FormGroup;
apiloading=false;
  constructor(private fb: FormBuilder,
              private router: Router,
              private apiService: ApiService,
              private santaService:SantaService) {
  }

  ngOnInit(): void {
    this.openForm = this.fb.group({
      surName: new FormControl(),
      memberNumber: new FormControl()
    });
  }

  onSubmit() {
    this.apiloading=true;
    this.apiService.log(this.openForm.get('memberNumber')?.value).subscribe(res=>{
      this.apiloading=false;
      console.log(res)
      if (res.code==201 && res.data.gifterName!=null){
        console.log("dd")
        this.santaService.routeState=true;
        this.santaService.selectState=true;
        this.santaService.currentSantaNo=this.openForm.get('memberNumber')?.value;
        this.santaService.currentSantaName=res.data.fullName;
        this.santaService.currentGifterName=res.data.gifterName;
        this.router.navigate(['select-you-receiver'])
      }else if(res.code==201&& res.data.gifterName==null){
        console.log("ss")
        this.santaService.routeState=true;

        this.santaService.currentSantaNo=this.openForm.get('memberNumber')?.value;
        this.santaService.currentSantaName=res.data.fullName;
        this.router.navigate(['select-you-receiver'])
      }
    },error => this.apiloading=false)

  }
}
