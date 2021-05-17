"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Discount = void 0;

require("reflect-metadata");

var _decorator = require("./decorator");

var _dec, _class;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

let Discount = (_dec = (0, _decorator.Bienvenida)(), _dec(_class = class Discount {
  //1

  /*Property decorators are very similar to parameter decorators in that they're only able to observe declarations*/

  /* Los decoradores de propiedades se pueden utilizar junto con otros decoradores para definir información adicional sobre la propiedad. 
     Por sí mismos, su eficacia es limitada.
    El registro de datos de propiedades parece ser el mejor uso para un decorador de propiedades por sí solo.
  */
  //@DecoratedProperty(40) // decorator for property
  //2
  // parameter decorator
  //no sé porque no es capaz de enviar el 'name' de la propiedad, fase experiemntal
  constructor(@(0, _decorator.decoratedFestucTimeParam)()
  percentage) {
    _defineProperty(this, "defaultPercentage", void 0);

    //constructor( percentage:number) {
    this.defaultPercentage = percentage;
  }

  get getDefaultDiscount() {
    return this.getDefault(Discount, undefined, 0); //return this.defaultPercentage;
  } //@methodTypeToApplyDecorated("%")


  getLiteral() {
    return "discount";
  }
  /*-- lo unico que me queda por resolver*/


  getDefault(target, name, index) {
    return Reflect.getMetadata(`case_${index}`, target, name) === undefined ? this.defaultPercentage : Reflect.getMetadata(`case_${index}`, target, name);
  }

}) || _class);
exports.Discount = Discount;