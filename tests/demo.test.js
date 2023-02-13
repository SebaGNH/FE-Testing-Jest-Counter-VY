

test('Esta prueba no debe fallar', () => {
  if ( 0 === 0 ) {
    throw new Error('No puede dividir entre cero');
  }
})

test('Segunda prueba', () => {
  if ( 0 === 1 ) {
    throw new Error('Prueba superada');
  }
})