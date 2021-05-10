
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
                set: (oldValue: number) => {
                    // Update the scoped value with max(newValue, min)
                    value = (
                       isPromotionTime()
                            ? val
                            : oldValue
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
const isPromotionTime=()=>{ 
    var today =  new Date;
    var startSeason =  new Date(today.getFullYear(), 11); //Febrero
    var endSeason =  new Date(today.getFullYear(), 12); //sept

    return (today >= startSeason &&  today <= endSeason)? true: false;
}



import "reflect-metadata";
/*
  para la función constructora viene como undefineden 
  Usando el index argumento, estamos almacenando un valor de metadatos para cada parámetro. 
*/
export  function decoratedFestucTimeParam(isYoung:boolean) {
    
 return (target: Object, propertyKey: string, parameterIndex: number)=> {
    console.log('Nombre del metodo', propertyKey);
    console.log('Clase', target);
    console.log('Posicion del parámetro', parameterIndex);

    isSeason() === true? Reflect.defineMetadata(`case_${parameterIndex}`,40,target): Reflect.defineMetadata(`case_${parameterIndex}`,propertyKey,target);
  }
}


 const isSeason=()=>{ 
    var today =  new Date;
    var startSeason =  new Date(today.getFullYear(), 2); //Febrero
    var endSeason =  new Date(today.getFullYear(), 9); //sept

    return (today >= startSeason &&  today <= endSeason)? true: false;
}
/*3*/
/*Mehtod decoratef*/
/*set prefix to text*/
/* Un ejemplo sería, por ejemplo setar la version 'v'...*/
export function methodTypeToApplyDecorated(txt:string)
  {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        
        console.log('Nombre del metodo', propertyKey);
        console.log('Clase', target);
        console.log('descriptor', descriptor);

            return {
                writable: false,
                enumerable:false,
                value:()=> `${txt + " "}${descriptor.value()}`
            }
      }; 
}




