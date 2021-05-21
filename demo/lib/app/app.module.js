var _dec, _class;

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FestucComponent } from './festuc/festuc.component';
export let AppModule = (_dec = NgModule({
  declarations: [FestucComponent],
  imports: [BrowserModule, FormsModule, CommonModule],
  providers: [],
  bootstrap: [FestucComponent]
}), _dec(_class = class AppModule {}) || _class);