/**
 * Funcion que sera evaluada en la parte del test, suma 2 numeros..
 *
 * @param {any} a numero 1
 * @param {any} b numero 2
 * @returns
 */

exports.suma = function suma(a, b) {
  return a + b;
};

/**
 * Funcion que sera evaluada en la parte del test, resta 2 numeros
 *
 * @param {any} a numero 1
 * @param {any} b numero 2
 * @returns
 */
exports.resta = function resta(a, b) {
  return a - b;
};

/**
 * Funcion que sera evaluada en la parte del test, multiplica 2 numeros.
 *
 * @param {any} a numero 1
 * @param {any} b numero 2
 * @returns
 */
exports.multiplicar = function multiplicar(a, b) {
  return a * b;
};

/**
 * Funcion que sera evaluada en la parte del test, divide 2 numeros lanza una excepcion por la division por cero.
 *
 * @param {any} a numero 1
 * @param {any} b numero 2
 * @returns
 */
exports.division = function division(a, b) {
  try {
    return a / b;
  } catch (error) {
    throw error;
  }
};
