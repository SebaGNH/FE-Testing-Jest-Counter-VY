# App base pare realizar pruebas con testing usando jest
- ícono git console "beaker"

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





- Probar un solo archivo
 1 - Ejecutar el yarn test
 2 -  pulsar la p para filtrar
 3  - Ingresar el nombre del test "02-template-string"



- usar babel para que sean compatibles los template string entre otros
yarn add --dev babel-jest @babel/core @babel/preset-env


- creamos el archivo "babel.config.cjs" y que adentro tenga
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
