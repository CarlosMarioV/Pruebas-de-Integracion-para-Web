// using ES6 modules
import expect, { createSpy, spyOn, isSpy } from 'expect';

// using CommonJS modules
var expect = require('expect');
var createSpy = expect.createSpy;
var spyOn = expect.spyOn;
var isSpy = expect.isSpy;

expect('something truthy').toExist();

describe('Existe', () => {
  it('Ejemplo de que un objeto o variable existe.', () => {
    expect(() => {
      expect(1).toExist();
      expect({ hello: 'world' }).toExist();
      expect([1, 2, 3]).toExist();
    }).toNotThrow();
  });
}); 
