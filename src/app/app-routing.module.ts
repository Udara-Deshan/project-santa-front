import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {LogComponent} from "./log/log.component";
import {SantaSelectComponent} from "./santa-select/santa-select.component";
import {SantaGuard} from "./santa.guard";
import {ReciverComponent} from "./reciver/reciver.component";

const routes: Routes = [
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path:"",component:AppComponent,children:[
      {path:"welcome",component:LogComponent},
      {path:"select-you-receiver",component:SantaSelectComponent,canActivate:[SantaGuard]},
      {path:"your-receiver",component:ReciverComponent}
    ]},
  {path:"**",component:LogComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
