"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppModule = void 0;

var _core = require("@angular/core");

var _platformBrowser = require("@angular/platform-browser");

var _festuc = require("./festuc/festuc.component");

var _dec, _class;

let AppModule = (_dec = (0, _core.NgModule)({
  declarations: [_festuc.FestucComponent],
  imports: [_platformBrowser.BrowserModule],
  providers: [],
  bootstrap: [_festuc.FestucComponent]
}), _dec(_class = class AppModule {}) || _class);
exports.AppModule = AppModule;