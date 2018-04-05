var capa2 = require('./llamadasAsincronas.capa2');
/**
 * Capa intermedia de conexion a datos, se puede ejemplificar como la capa de logica o controlador de una aplicación la logica se maneja por medio de devoluciones en callback, lo unico que hace es enlazar la capa2 (conexión a base de datos) con el test.
 *
 * @param {any} callback function
 */
exports.ObtenerNombre = function ObtenerNombre(callback) {
  capa2.RetornarNombre(function(res) {
    //devuelve el dato en el callback.
    callback(res);
  });
};
