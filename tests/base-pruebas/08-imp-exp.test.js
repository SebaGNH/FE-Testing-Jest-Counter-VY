import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en "08-imp-exp"', () => { 
  /* Test 1 */
  test('"getHeroeById" Retorna un heroe por id', () => { 
    const id = 1;
    const heroe = getHeroeById(id);    
    //console.log(heroe) // { id: 1, name: 'Batman', owner: 'DC' }

    const testGetHeroeById = { id: 1, name: 'Batman', owner: 'DC' }
    expect( heroe ).toEqual(testGetHeroeById);
  })

  /* Test 2 */
  test('"getHeroeById" Retorna undefined si no existe el id', () => { 
    const id = 100;
    const heroe = getHeroeById(id);    
    //console.log(heroe) //undefined

    expect( heroe ).toBeFalsy();
    //toBeFalsy(); evalua null, undefined y false
  })


  /* Test 3 */
  test('"getHeroesByOwner" debe retornar el la marca', () => { 
    const owner = 'DC';
    const heroe = getHeroesByOwner(owner);
    //console.log(heroe);

    const testgetHeroesByOwnerDC =  [
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' }
    ]

    /* Diferentes maneras de hacerlas */
    expect(heroe).toEqual(testgetHeroesByOwnerDC);
    expect( heroe.length).toBe(3);
    expect( heroe ).toEqual( heroe.filter( (hero) => hero.owner === owner));


    const ownerMarvel = 'Marvel';
    const cantMarvel = getHeroesByOwner(ownerMarvel).length;
    //console.log(cantMarvel);


    expect(cantMarvel).toBe(2);


 
  })


})