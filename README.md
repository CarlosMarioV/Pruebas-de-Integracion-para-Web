# Pruebas de "Integración" para Web (Comunidad de Aplicaciones Moviles).

# Introducción

Las pruebas de integración para Web cambian un poco de las pruebas de Integración para lenguajes Orientados a Objetos, se realizan por medio de las peticiones de la (URL) para probar el Back-end (API) o se prueban las funciones del Front-end para calcular que este respondiendo de la mejor manera. La informacion necesaria pasa por la URL y se espera que respanda algo, se analiza la respuesta y si todo concuerda se da por pasada la prueba.No es necesario hacer la pruebas desde el API se pueden realizar en el mismo servidor en tiempo de desarrollo, solo se tiene que tomar en consideración la forma en como su API empaqueta y devuelve los datos.

### Libreria usada para este ejemplo:

La libreria [Jest](https://facebook.github.io/jest/docs/es-ES/getting-started.html), ésta libreria es la principal "core" del ejemplo hecho aquí, en el sitio WEB se puede encontrar los pasos de instalación. Luego se utiliza [Expect](https://github.com/mjackson/expect) para expandir la sistaxis de prubas que se pueden hacer, esta segunda todavia no se ha implementado, fue donada a Jest por ende la información actualizada se encuentra ahí. El entorno tiene que tener _npm_ y _node_ instalados.

#### Inicio

* Ejecute
  * npm install
  * npm test
    * Las pruebas de ejecutaran y pasaran con exito.

### Estructura

* .gitignore
* calculadora.js
* calculadora.test.js
* llamadasAsincronas.capa1.js
* llamadasAsincronas.capa2.js
* llamadasAsincronas.test.js
* package.json
* README.md

_Nota_ Los test siempre llevan la extensión .test para que la libreria lea ese archivo como un "Test Suite". El ejemplo consta de una calculadora a la cual se le realizan las pruebas de Integración, si bien es cierto solo se hacen las pruebas a un archivo de ejemplo se puede adecuar para realizar las pruebas a diferentes archvios con

```javascript
var archivo = require('./archivo.js');
```

esto exportara las funciones a otros archivos y así si la respuesta es correcta significara que las integraciones de los archivos esta correcta y se estan comunicando correctamente.

### Ejecución de pruebas normales.

Función el el archivo _calculadora.js_, realiza la logica de la función.

```javascript
exports.suma = function suma(a, b) {
  return a + b;
};
```

Función en el archivo _calculadora.test.js_, verifica que la logica de suma sea la correcta.

```javascript
test('Suma de 1 + 2 debe ser 3', () => {
  //Se llama a la funcion y se espera que el retorno sea lo que se le indica.
  expect(calculadora.suma(1, 2)).toBe(3);
});
```

### Ejecución de pruebas Asincronas

Función en el archivo _llamadasAsincronas.test.js_ espera un resultado de las llamadas por callback hechas.

```javascript
test('Espera el dato de una llamada Asincrona.', done => {
  capa1.ObtenerNombre(res => {
    expect(res).toBe('Comunidad de Aplicaciones Moviles.');
    done();
  });
});
```

Función en el archivo _llamadasAsincronas.capa1.js_ Capa intermedia de conexion a datos, se puede ejemplificar como la capa de logica o controlador de una aplicación la logica se maneja por medio de devoluciones en callback, lo unico que hace es enlazar la capa2 (conexión a base de datos) con el test.

```javascript
exports.ObtenerNombre = function ObtenerNombre(callback) {
  capa2.RetornarNombre(function(res) {
    //devuelve el dato en el callback.
    callback(res);
  });
};
```

Función en el archivo _llamadasAsincronas.capa2.js_ Ultima capa, se puede representar como la capa de conexión a la Base de Datos, esta espera unos 5 segundos antes de enviar el resultado ejemplificando una conexion real a conexion de BD. La ejecución se realiza por medio de callback.

```javascript
exports.RetornarNombre = function RetornarNombre(callback) {
  window.setTimeout(retornar(), milliseconds);
  function retornar() {
    callback('Comunidad de Aplicaciones Moviles.');
    return;
  }
};
```
