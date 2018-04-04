#Pruebas de "Integración" para Web (Comunidad de Aplicaciones Moviles).

#Introducción

Las pruebas de integración para Web cambian un poco de las pruebas de Integración para lenguajes Orientados a Objetos, se realizan por medio de las peticiones de la (URL) para probar el Back-end (API) o se prueban las funciones del Front-end para calcular que este respondiendo de la mejor manera. La informacion necesaria para por la URL y se espera que respanda algo, se analiza la respuesta y si todo concuerda se da por pasada la prueba.

###Libreria usada para este ejemplo:
[Jest](https://facebook.github.io/jest/docs/en/getting-started.html), ésta libreria es la principal "core" del ejemplo hecho aquí, en el sitio WEB se puede encontrar los pasos de instalación. Luego se utiliza [Expect](https://github.com/mjackson/expect) para expandir la sistaxis de prubas que se pueden hacer, esta segunda todavia no se ha implementado. Este ejemplo se puede instalar con npm install. El entorno tiene que tener _npm_ y _node_ instalados.

###Estructura

* calculadora.js
* calculadora.test.js
* package.json
* README.md

_Nota_ Los test siempre llevan la extensión .test para que la libreria lea ese archivo como un "Test Suite". El ejemplo consta de una calculadora a la cual se le realizan las pruebas de Integración, si bien es cierto solo se hacen las pruebas a un archivo de ejemplo se puede adecuar para realizar las pruebas a diferentes archvios con ´´´javascript var calculadora = require('./calculadora.js'); ´´´ esto exportara las funciones a otros archivos y así si la respuesta es correcta significara que las integraciones de los archivos esta correcta y se estan comunicando correctamente.

Función el el archivo _calculadora.js_, realiza la logica de la función.

´´´javascript

exports.suma = function suma(a, b) {

    return a + b;

}

´´´

Función el el archivo _calculadora.test.js_, verifica que la logica de suma sea la correcta.

´´´javascript
test('Suma de 1 + 2 debe ser 3', () => {
//Se llama a la funcion y se espera que el retorno sea lo que se le indica.
expect(calculadora.suma(1, 2)).toBe(3);
});
´´´
