var milliseconds = 5000;
/**
 * Ultima capa, se puede representar como la capa de conexión a la Base de Datos, esta espera unos 5 segundos antes de enviar el resultado ejemplificando una conexion real a conexion de BD. La ejecución se realiza por medio de callback.
 *
 * @param {any} callback function
 */
exports.RetornarNombre = function RetornarNombre(callback) {
  window.setTimeout(retornar(), milliseconds); //Simula el tiempo de espera de una ejecución normal a bases de datos.
  function retornar() {
    callback('Comunidad de Aplicaciones Moviles.');
    return;
  }
};
