import { suma } from "../../../../../../src/es/geekshubs/academy/kata3/calculadora";
import { resta } from "../../../../../../src/es/geekshubs/academy/kata3/calculadora";
import { division } from "../../../../../../src/es/geekshubs/academy/kata3/calculadora";
import { multi } from "../../../../../../src/es/geekshubs/academy/kata3/calculadora";
describe('Testing for kata3', function () {

    test('Operacion suma 0 + 0 = 0', function () {
        const expected = 0
        const result = suma(0,0)
        expect(result).toBe(expected)
    });
    
    test('Operacion suma 10 + 10 = 20', function () {
        const expected = 20
        const result = suma(10,10)
        expect(result).toBe(expected)
    });
    
    test('Operacion suma -1 + 0 = -1', function () {
        const expected = -1
        const result = suma(-1,0)
        expect(result).toBe(expected)
    });


    test('Operacion resta 0 - 0 = 0', function () {
        const expected = 0
        const result = resta(0,0)
        expect(result).toBe(expected)
    });

        test('Operacion resta 3 - 2 = 1', function () {
        const expected = 1
        const result = resta(3,2)
        expect(result).toBe(expected)
    });

    
    test('Operacion resta -3 - 2 = -5', function () {
        const expected = -5
        const result = resta(-3,2)
        expect(result).toBe(expected)
    });

    
    test('Operacion division 5 / 0 = Infinity', function () {
        const expected = Infinity
        const result = division(5,0)
        expect(result).toBe(expected)
    });

    test('Operacion division 5 / -0 = -Infinity', function () {
        const expected = -Infinity
        const result = division(5,-0)
        expect(result).toBe(expected)
    });

    test('Operacion division 10 / 2 = 5', function () {
        const expected = 5
        const result = division(10,2)
        expect(result).toBe(expected)
    });
    
    
    test('Operacion multiplicacion 5 * 0 = 0', function () {
        const expected = 0
        const result = multi(5,0)
        expect(result).toBe(expected)
    });

    test('Operacion multiplicacion 5 * -5 = -25', function () {
        const expected = -25
        const result = multi(5,-5)
        expect(result).toBe(expected)
    });

    test('Operacion multiplicacion -5 * -5 = 25', function () {
        const expected = 25
        const result = multi(-5,-5)
        expect(result).toBe(expected)
    });

    
});

