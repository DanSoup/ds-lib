const rand = require('../functions/rand.js').randSeeded;

describe('rand', () => {
  test('', () => {
    expect(typeof rand).toBe('object')
    expect(rand).toHaveProperty('int')
  })
  describe('int()', () => {
    test('it returns a 0 or 1 with no arguments', () => {
      expect(rand.int(undefined, undefined, 0.2)).toBe(0);
      expect(rand.int(undefined, undefined, 0.7)).toBe(1);
    });
    test('it returns an integer from 0 to the first argument entered', () => {
      expect(rand.int(1, undefined, 0.19)).toBe(0);
      expect(rand.int(5, undefined, 0.99)).toBe(5);
      expect(rand.int(9, undefined, 0.69)).toBe(6);
      expect(rand.int(-1, undefined, 0.6)).toBe(0);
      expect(rand.int(-1, undefined, 0.19)).toBe(-1);
      expect(rand.int(-4, undefined, 0.59)).toBe(-2);
    });
    test('it returns an integer from 0 to the first argument entered', () => {
      expect(rand.int(1, -1, 0.1)).toBe(-1);
      expect(rand.int(1, -1, 0.5)).toBe(0);
      expect(rand.int(1, -1, 0.9)).toBe(1);
      expect(rand.int(-5, 4, 0.95)).toBe(4);
      expect(rand.int(-5, 4, 0.05)).toBe(-5);
      expect(rand.int(-5, 4, 0.65)).toBe(1);
    });
  });  
});