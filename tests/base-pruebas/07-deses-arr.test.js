import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => { 
  test('retornaArreglo - debe retornar un arreglo con un string y un number', () => { 
    const testRetornaArreglo = ['ABC', 123];

    const [ letras , numeros ] = retornaArreglo();    
    //console.log(typeof numeros) // number

    expect(letras).toBe('ABC');
    expect(numeros).toBe(123); //toBe también evalúa tipo de datos

    expect(typeof letras).toBe('string');
    expect(typeof numeros).toBe('number');


    //expect.any(String) espera cualquier tipo de string
    expect(typeof letras).toEqual( expect.any(String));
  })
})








