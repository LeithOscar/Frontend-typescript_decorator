import "reflect-metadata";
/*
target: any
target is the object that owns the decorated property. target in the example is TargetDemo.
propertyKey: string | symbol
propertyKey is the name of the decorated property. It could also be a Symbol, depending on how the property is defined on the object.
propertyKey in the example is foo.    
*/

export function DecoratedProperty(val = 0) {
  let value;
  return (target, propertyKey) => {
    const update = Reflect.defineProperty(target, propertyKey, {
      get: () => {
        // Return the scoped value
        return value;
      },
      set: oldValue => {
        // Update the scoped value with max(newValue, min)
        value = isPromotionTime() ? val : oldValue;
      }
    }); // If the update failed, something went wrong

    if (!update) {
      // Kill everything
      throw new Error("Unable to update property");
    }
  };
}

const isPromotionTime = () => {
  var today = new Date();
  var startSeason = new Date(today.getFullYear(), 1); //Febrero

  var endSeason = new Date(today.getFullYear(), 12); //sept

  return today >= startSeason && today <= endSeason ? true : false;
};
/*
para la función constructora viene como undefineden 
Usando el index argumento, estamos almacenando un valor de metadatos para cada parámetro. 
*/


export function decoratedFestucTimeParam() {
  return (target, propertyKey, parameterIndex) => {
    console.log('Nombre del metodo', propertyKey);
    console.log('Clase', target);
    console.log('Posicion del parámetro', parameterIndex);
    isSeason() === true ? Reflect.defineMetadata(`case_${parameterIndex}`, 40, target) : Reflect.defineMetadata(`case_${parameterIndex}`, propertyKey, target);
  };
}

const isSeason = () => {
  var today = new Date();
  var startSeason = new Date(today.getFullYear(), 2); //Febrero

  var endSeason = new Date(today.getFullYear(), 9); //sept

  return today >= startSeason && today <= endSeason ? true : false;
};
/*3*/

/*Mehtod decoratef*/

/*set prefix to text*/

/* Un ejemplo sería, por ejemplo setar la version 'v'...*/


export function methodTypeToApplyDecorated(txt) {
  return function (target, propertyKey, descriptor) {
    console.log('Nombre del metodo', propertyKey);
    console.log('Clase', target);
    console.log('descriptor', descriptor);
    return {
      writable: false,
      enumerable: false,
      value: () => `${txt + " "}${descriptor.value()}`
    };
  };
} // // decoradores de clase
//  export function Bienvenida(){
//     return function(target:Function){
//     //   target.prototype.hello = function():void{
//     //     console.log("Tienes cupones de descuento!!")
//     //   }
//     alert("Tienes cupones de descuento!!");
//     }
// }

/**
 * The class decorator can be used to override the constructor function of a class.
 *
 * @param target the class being decorated
 * @return A new constructor producing an identical structure
 */

export function Bienvenida(target) {
  let newConstructor = function () {
    target.apply(this);
    this.hello = 'World';
  };

  newConstructor.prototype = target.prototype;
  return newConstructor;
}