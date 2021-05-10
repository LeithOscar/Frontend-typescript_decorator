
export function DecoratedProperty(val: number = 0) {
    // Scope the value to be reused
    let value: number;
    /*
    target: any
    target is the object that owns the decorated property. target in the example is TargetDemo.
    propertyKey: string | symbol
    propertyKey is the name of the decorated property. It could also be a Symbol, depending on how the property is defined on the object.
    propertyKey in the example is foo.    
    */
    return (target: any, propertyKey: string | symbol) => {
        // Store the definition result
        const update = Reflect.defineProperty(
            target,
            propertyKey,
            {
                configurable: true,
                enumerable: true,
                get: () => {
                    // Return the scoped value
                    return value;
                },
                set: (newValue: number) => {
                    // Update the scoped value with max(newValue, min)
                    value = (
                        newValue >= val
                            ? newValue
                            : val
                    );
                }
            },
        );
        // If the update failed, something went wrong
        if (!update) {
            // Kill everything
            throw new Error("Unable to update property");
        }
    }
}
import "reflect-metadata";
const requiredMetadataKey = Symbol("required");
/*
  para la función constructora viene como undefineden 
  Usando el index argumento, estamos almacenando un valor de metadatos para cada parámetro. 
*/
export  function decoratedParam(isYooung:boolean) {
 return (target: Object, propertyKey: string, parameterIndex: number)=> {
    console.log('Nombre del metodo', propertyKey);
    console.log('Clase', target);
    console.log('Posicion del parámetro', parameterIndex);

    if(isYooung)
    {
      Reflect.defineMetadata(`case_${parameterIndex}`,35,target);
    }else{
      Reflect.defineMetadata(`case_${parameterIndex}`,propertyKey,target);
    }
  }
}



