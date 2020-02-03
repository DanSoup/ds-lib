const factors = require('../../functions/math/factors.js');

describe('factors.js', () => {

    describe('skeleton tests, works for integers up to 16', () => {

        test('1', () => {
            expect(factors(1)).toEqual([1])
        });
        test('2', () => {
            expect(factors(2)).toEqual([1, 2])
        });
        test('3', () => {
            expect(factors(3)).toEqual([1, 3])
        });
        test('4', () => {
            expect(factors(4)).toEqual([1, 2, 4])
        });
        test('5', () => {
            expect(factors(5)).toEqual([1, 5])
        });
        test('6', () => {
            expect(factors(6)).toEqual([1, 2, 3, 6])
        });
        test('7', () => {
            expect(factors(7)).toEqual([1, 7])
        });
        test('8', () => {
            expect(factors(8)).toEqual([1, 2, 4, 8])
        });
        test('9', () => {
            expect(factors(9)).toEqual([1, 3, 9])
        });
        test('10', () => {
            expect(factors(10)).toEqual([1, 2, 5, 10])
        });

    });

});