import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";



describe('Pruebas en 05-funciones', () => { 
  test('getUser debe retornar un objeto', () => { 
    const testUser =  
      {
        uid: 'ABC123',
        username: 'Fufufa_321'
      }

      const user = getUser();
      // console.log(user)

      expect(testUser).toEqual(user);
  })



  test('getUsuarioActivo debe retornar un objeto', () => { 
    const nombre = 'Canelo';
    const testUsuarioActivo = 
    {
      uid: 'ABC567',
      username: nombre
    }
    
    const user = getUsuarioActivo(nombre);

    expect(testUsuarioActivo).toEqual(user);
  })
})





//Los objetos se comparan en base donde apunta la memoria en la que está almacenado
//Los primitivos apuntan al valor

//toStrictEqual o toEqual, son similares