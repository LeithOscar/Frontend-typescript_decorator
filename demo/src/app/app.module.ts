import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FestucComponent } from './festuc/festuc.component';

@NgModule({
  declarations: [
    FestucComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FestucComponent]
})
export class AppModule { }
