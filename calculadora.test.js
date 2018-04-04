var calculadora = require('./calculadora.js');

test('Suma de 1 + 2 debe ser 3', () => {
    //Se llama a la funcion y se espera que el retorno sea lo que se le indica.
    expect(calculadora.suma(1, 2)).toBe(3);
});

test('Resta de 4 + 2 debe ser 2', () => {
    //Se llama a la funcion y se espera que el retorno sea lo que se le indica.
    expect(calculadora.resta(4, 2)).toBe(2);
});

test('La multiplicacion de 4 * 2 debe ser 8', () => {
    //Se llama a la funcion y se espera que el retorno sea lo que se le indica.
    expect(calculadora.multiplicar(4, 2)).toBe(8);
});

test('La division de 16 / 2 debe ser 8', () => {
    //Se llama a la funcion y se espera que el retorno sea lo que se le indica.
    expect(calculadora.division(16, 2)).toBe(8);
});