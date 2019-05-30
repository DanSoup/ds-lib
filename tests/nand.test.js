const nand = require('../functions/nand');

describe('nand()', () => {
  test('works with true and false', () => {

    const falsey = false;
    const truthy = true;

    expect(nand(falsey, falsey)).toBe(true);
    expect(nand(falsey, truthy)).toBe(true);
    expect(nand(truthy, falsey)).toBe(true);
    expect(nand(truthy, truthy)).toBe(false);

  });
  test('works with truthy and falsy values', () => {

    let falsey = '';
    let truthy = 'A';

    expect(nand(falsey, falsey)).toBe(true);
    expect(nand(falsey, truthy)).toBe(true);
    expect(nand(truthy, falsey)).toBe(true);
    expect(nand(truthy, truthy)).toBe(false);

    falsey = 0;
    truthy = 1;

    expect(nand(falsey, falsey)).toBe(true);
    expect(nand(falsey, truthy)).toBe(true);
    expect(nand(truthy, falsey)).toBe(true);
    expect(nand(truthy, truthy)).toBe(false);

    falsey = undefined;
    truthy = [];

    expect(nand(falsey, falsey)).toBe(true);
    expect(nand(falsey, truthy)).toBe(true);
    expect(nand(truthy, falsey)).toBe(true);
    expect(nand(truthy, truthy)).toBe(false);

    falsey = null;
    truthy = {};

    expect(nand(falsey, falsey)).toBe(true);
    expect(nand(falsey, truthy)).toBe(true);
    expect(nand(truthy, falsey)).toBe(true);
    expect(nand(truthy, truthy)).toBe(false);

    falsey = NaN;
    truthy = () => {};

    expect(nand(falsey, falsey)).toBe(true);
    expect(nand(falsey, truthy)).toBe(true);
    expect(nand(truthy, falsey)).toBe(true);
    expect(nand(truthy, truthy)).toBe(false);
    
  });
});