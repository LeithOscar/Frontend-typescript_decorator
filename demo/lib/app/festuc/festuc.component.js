var _dec, _dec2, _dec3, _class;

import { Component } from '@angular/core';
import { Discount } from '../discount';
export let FestucComponent = (_dec = Component({
  selector: 'festuc-root',
  templateUrl: './festuc.component.html'
}), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", []), _dec(_class = _dec2(_class = _dec3(_class = class FestucComponent {
  constructor() {
    this.discountToApply = null;
    this.product = 'Festuc ';
    this.cupon = '';
    this.discount = 20;
    this.buyFestuc = 'https://www.amazon.es/s?k=pistachos&hvadid=80401819697355&hvbmt=bp&hvdev=c&hvqmt=p&tag=bingamazonest-21&ref=pd_sl_hb6wnxihe_p';
    this.hasValidCupon = false;
    this.discountToApply = new Discount(this.discount);
  }

  getDefaultDiscount() {
    return this.discountToApply.getDefaultDiscount;
  }

  getLiteral() {
    return this.product + this.discountToApply.getLiteral();
  }

  applyCupon() {
    this.hasValidCupon = this.discountToApply.isValidCupon(this.cupon);
  }

}) || _class) || _class) || _class);