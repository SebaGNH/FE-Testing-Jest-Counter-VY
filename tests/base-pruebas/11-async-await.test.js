import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await', () => {
  test('01 - "getImagen" debe retornar un URL de una imagen', async () => {
    const urlIMG = await getImagen();
    //console.log(urlIMG);

    expect(typeof url).toBe('string');
  })
})