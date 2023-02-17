import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas'


describe('Pruebas en "09-promesas', () => { 
  /* Usando Then */
  test('01- "getHeroeByIdAsync" debe retornar un heroe', ( done ) => { 
      const id = 1;
      const testGetHeroeByIdAsync = getHeroeByIdAsync(id)
      .then( (hero) =>{
        //console.log(hero)
        const heroeEsperado = { id: 1, name: 'Batman', owner: 'DC' };
        
        expect( heroeEsperado ).toEqual( hero );

        done(); //cuando termina el proceso va done
      });
      
    })

  /* Usando Async */
  test('02 - "getHeroeByIdAsync" debe retornar un heroe no existe', ( done ) => { 
      const id = 100;
      const testGetHeroeByIdAsync = getHeroeByIdAsync(id)
      .catch( (hero) =>{
        console.log(hero)
        const catchEsperado = "No se pudo encontrar el héroe"
        
        expect( catchEsperado ).toEqual( hero );

        done(); 
      });
      
    })
}) 

/* 
done se usa para cuando se termina de ejecutar, similar al async
*/