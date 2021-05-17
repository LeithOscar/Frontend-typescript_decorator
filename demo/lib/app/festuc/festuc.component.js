var _dec, _class;

import { Component } from '@angular/core';
import { Discount } from '../discount';
export let FestucComponent = (_dec = Component({
  selector: 'festuc-root',
  templateUrl: './festuc.component.html'
}), _dec(_class = class FestucComponent {
  title = 'decorators demo';
  discount = 20;
  discountToApply = null;
  buyFestuc = 'https://www.amazon.es/s?k=pistachos&hvadid=80401819697355&hvbmt=bp&hvdev=c&hvqmt=p&tag=bingamazonest-21&ref=pd_sl_hb6wnxihe_p';

  constructor() {
    this.discountToApply = new Discount(this.discount);
    this.discountToApply.hello();
  }

  getDefaultDiscount() {
    return this.discountToApply.getDefaultDiscount;
  }

  getLiteral() {
    return "festuc " + this.discountToApply.getLiteral();
  }

}) || _class);