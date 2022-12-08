import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import { LogComponent } from './log/log.component';
import { SantaSelectComponent } from './santa-select/santa-select.component';
import { SnowComponent } from './snow/snow.component';
import { ReciverComponent } from './reciver/reciver.component';
import {HttpClientModule} from "@angular/common/http";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { MatDialogModule} from "@angular/material/dialog";
import { GifterDialogPopUpComponent } from './gifter-dialog-pop-up/gifter-dialog-pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    LogComponent,
    SantaSelectComponent,
    SnowComponent,
    ReciverComponent,
    GifterDialogPopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
