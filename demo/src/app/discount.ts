import { decoratedParam as isYoungDecorated} from "./decorator";

export class Discount{

    //1
    /*Property decorators are very similar to parameter decorators in that they're only able to observe declarations*/
    /* Los decoradores de propiedades se pueden utilizar junto con otros decoradores para definir información adicional sobre la propiedad. 
       Por sí mismos, su eficacia es limitada.
      El registro de datos de propiedades parece ser el mejor uso para un decorador de propiedades por sí solo.
    */
    //@DecoratedProperty(35) // decorator for property
    defaultPercentage: number;

    //@DecoratedProperty(55) // decorator not work here
    otherVal: number;
    
    //2
    // parameter decorator
    //no sé porque no es capaz de enviar el 'name' de la propiedad
    constructor(@isYoungDecorated(true) percentage:number) {
        this.defaultPercentage = percentage;
       
    }


    public get getDefaultDiscount(): number{
        return  this.getDefault(Discount,undefined,0);
    }

    private getDefault(target:object,name:any,index:number):number{
            return Reflect.getMetadata(`case_${index}`, target, name) === undefined? this.defaultPercentage: Reflect.getMetadata(`case_${index}`, target, name) ;
    }
}
