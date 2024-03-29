var _dec, _dec2, _class;

import 'reflect-metadata';
import { Bienvenida } from './decorator';
export let Discount = (_dec = Reflect.metadata("design:type", Function), _dec2 = Reflect.metadata("design:paramtypes", [Number]), Bienvenida(_class = _dec(_class = _dec2(_class = class Discount {
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
  //constructor(@decoratedFestucTimeParam() percentage:number) {
  constructor(percentage) {
    this.defaultPercentage = void 0;
    this.defaultPercentage = percentage;
  }

  get getDefaultDiscount() {
    return this.getDefault(Discount, undefined, 0); //return this.defaultPercentage;
  } //@methodTypeToApplyDecorated("€")


  getLiteral() {
    return 'discount';
  }
  /*-- lo unico que me queda por resolver*/


  getDefault(target, name, index) {
    return Reflect.getMetadata(`case_${index}`, target, name) === undefined ? this.defaultPercentage : Reflect.getMetadata(`case_${index}`, target, name);
  }

  isValidCupon(cupon) {
    return cupon.length > 5;
  }

}) || _class) || _class) || _class);