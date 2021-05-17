"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FestucComponent = void 0;

var _core = require("@angular/core");

var _discount = require("../discount");

var _dec, _class;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

let FestucComponent = (_dec = (0, _core.Component)({
  selector: 'festuc-root',
  templateUrl: './festuc.component.html'
}), _dec(_class = class FestucComponent {
  constructor() {
    _defineProperty(this, "title", 'decorators demo');

    _defineProperty(this, "discount", 20);

    _defineProperty(this, "discountToApply", null);

    _defineProperty(this, "buyFestuc", 'https://www.amazon.es/s?k=pistachos&hvadid=80401819697355&hvbmt=bp&hvdev=c&hvqmt=p&tag=bingamazonest-21&ref=pd_sl_hb6wnxihe_p');

    this.discountToApply = new _discount.Discount(this.discount);
    this.discountToApply.hello();
  }

  getDefaultDiscount() {
    return this.discountToApply.getDefaultDiscount;
  }

  getLiteral() {
    return "festuc " + this.discountToApply.getLiteral();
  }

}) || _class);
exports.FestucComponent = FestucComponent;