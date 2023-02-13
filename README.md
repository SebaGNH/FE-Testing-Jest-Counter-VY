# App base pare realizar pruebas con testing usando jest


- https://jestjs.io/

yarn add --dev jest

- package.json
{
  "scripts": {
    "test": "jest"
  }
}

yarn test


- test con watch
{
  "scripts": {
    "test": "jest --watchAll"
  }
}


- Intellisense para jest 
-  --dev es lo mismo que -D
yarn add --dev @types/jest



des + tab
describe('first', () => { second })


- Actualización
Cambiar extensión de los archivos jest.config.js y babel.config.js a .cjs
