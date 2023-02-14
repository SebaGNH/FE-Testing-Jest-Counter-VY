
// Prueba con error
/* test('Esta prueba no debe fallar', () => {
  if ( 0 === 0 ) {
    throw new Error('No puede dividir entre cero');
  }
}) */


//Prueba que pasa sin error
/* test('Segunda prueba', () => {
  if ( 0 === 1 ) {
    throw new Error('Prueba superada');
  }
}) */



// Prueba con descripción del componente en el que se t rabaja
// Generalmente es un describe por cada prueba
describe('Pruebs en <DemoComponent/>', () => { 
  //Nombre de la prueba 
  test('Tercer test', () => {
    // 1- Inicialización
      const mensaje_1 = 'Hola Mundo'
      const mensaje_1B = 'Hola Mundo   '
      
      // 2- Estímulo
      const mensaje_2 = mensaje_1.trim();

    // 3- Observar el comportamiento...esperado, similar al if()
    expect( mensaje_1 ).toBe( mensaje_2 );

    /* expect( mensaje_1B ).toBe( mensaje_2 ); */
  });
})





