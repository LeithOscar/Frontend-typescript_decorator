# typescript_decorator
Decorator usinf Typescript

## Installation
Use the npm install

```bash
npm  i
```


## Why Decorator

Los decoradores son una propuesta que nos permite añadir anotaciones y metadatos o cambiar el comportamiento de clases, propiedades, métodos, parámetros y accesors. 
Con TypeScript podemos usarlos, siendo aún una fase experimentalDecorators del tsconfig.json de nuestro proyecto --experimentalDecorators ---target ES5.

¿Cómo funcionan?
Un decorador es una función que, usando la forma @expression donde expression evaluará la función que será llamada.aplicando nuevas funcionalidades o comprobovacions deseadas, afecta esto al metodo llamado. sin modificar el codigo de la propia clase.

Method
```python
//Definition
//target: Metodo decorado, generalmente tipado como Object
//propertyKey: Nombre del metodo, tipado como string | symbol
//descriptor: Property Descriptor del objeto (value, writable, enumerable, configurable)


export function methodDecorated(txt:string)
  {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
            //cdo something
    }
}
```
Params
```python
//Definition
//Son más simples que los anteriores, un decorador de propiedades debe tomar como parámetros 
//target, que es el prototipo de la clase
// propertyKey, el nombre de la propiedad
//Finalmente los decoradores de parámetros, funcionan igual pero con el parámetro adicional parameterIndex


export  function decoratedParam(isYoung:boolean) {
    
 return (target: Object, propertyKey: string, parameterIndex: number)=> {
        //do something
  }
}
```

Property
```python
//Definition
//target is the object that owns the decorated property. target in the example is TargetDemo.
//propertyKey: string | symbol


export function DecoratedProperty(val: number = 0) {
    return (target: any, propertyKey: string | symbol) => {
        // Do something
    }
}
```