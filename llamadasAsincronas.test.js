var capa1 = require('./llamadasAsincronas.capa1');

/**
 * Se estable el done en la devolución del test, esto hace que la libreria espere los datos hasta que se termine o es llamado el done(), con esto se soluciona lo de las llamadas asincronas, para mas informacion visitar la pagina de la libreria.
 */
test('Espera el dato de una llamada Asincrona.', done => {
  capa1.ObtenerNombre(res => {
    expect(res).toBe('Comunidad de Aplicaciones Moviles.');
    done(); //Función llamada cuando se termine de ejecutar la anterior.
  });
});
