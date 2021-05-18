import 'reflect-metadata';
import {
  decoratedFestucTimeParam,
  DecoratedProperty,
  methodTypeToApplyDecorated,
  Bienvenida,
} from './decorator';

@Bienvenida()
export class Discount {
  //1
  /*Property decorators are very similar to parameter decorators in that they're only able to observe declarations*/
  /* Los decoradores de propiedades se pueden utilizar junto con otros decoradores para definir información adicional sobre la propiedad. 
       Por sí mismos, su eficacia es limitada.
      El registro de datos de propiedades parece ser el mejor uso para un decorador de propiedades por sí solo.
    */
  //@DecoratedProperty(40) // decorator for property
  defaultPercentage: number;

  //2
  // parameter decorator
  //no sé porque no es capaz de enviar el 'name' de la propiedad, fase experiemntal
  //constructor(@decoratedFestucTimeParam() percentage:number) {
  constructor(percentage: number) {
    this.defaultPercentage = percentage;
  }

  public get getDefaultDiscount(): number {
    return this.getDefault(Discount, undefined, 0);
    //return this.defaultPercentage;
  }

  //@methodTypeToApplyDecorated("€")
  public getLiteral(): string {
    return 'discount';
  }

  /*-- lo unico que me queda por resolver*/
  private getDefault(target: object, name: any, index: number): number {
    return Reflect.getMetadata(`case_${index}`, target, name) === undefined
      ? this.defaultPercentage
      : Reflect.getMetadata(`case_${index}`, target, name);
  }

  isValidCupon(cupon: string): boolean {
    return cupon.length > 5;
  }
}
