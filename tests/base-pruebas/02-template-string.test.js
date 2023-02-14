import { getSaludo } from "../../src/base-pruebas/02-template-string";



describe('Pruebas en 02-Template-String', () => { 
  test('Test debe retornar el nombre completo', () => { 
    const nombre = 'Canelo';
    const mensaje = getSaludo(nombre);

    expect( mensaje ).toBe(`Hola ${nombre}`);
  })
})