import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {LogComponent} from "./log/log.component";
import {SantaSelectComponent} from "./santa-select/santa-select.component";

const routes: Routes = [
  {path:"",component:AppComponent,children:[
      {path:"",component:LogComponent},
      {path:"select-you-receiver",component:SantaSelectComponent}

    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
