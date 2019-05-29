const base64 = require('../functions/base64');

describe('base64.toString()', () => {
  test('is a function', () => {
    expect(base64.toString).toBeInstanceOf(Function)
  });
  test('for values 0 - 63 returns appropriate character', () => {
    expect(base64.toString(0)).toBe('0')
    expect(base64.toString(1)).toBe('1')
    expect(base64.toString(10)).toBe('A')
    expect(base64.toString(16)).toBe('G')
    expect(base64.toString(60)).toBe('y')
    expect(base64.toString(62)).toBe('+')
    expect(base64.toString(63)).toBe('/')
  });
  test('for values 63+ returns appropriate string', () => {
    expect(base64.toString((64 * 1) + 0)).toBe('10');
    expect(base64.toString((64 * 1) + 32)).toBe('1W');
    expect(base64.toString((64 * 10) + 10)).toBe('AA');
    expect(base64.toString((64 * 63) + 63)).toBe('//');
    expect(base64.toString((64 * 64 * 5) + (64 * 2) + 7)).toBe('527');
    expect(base64.toString((64 * 64 * 59) + (64 * 11) + 17)).toBe('xBH');
  });
  test('works when numbers are entered as a string', () => {
    expect(base64.toString('16')).toBe('G');
    expect(base64.toString('650')).toBe('AA');
  });
  test('invalid values throw an error', () => {
    expect(() => base64.toString()).toThrow();
  });
});