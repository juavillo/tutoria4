import { factorial } from "../../../../../../src/es/geekshubs/academy/kata3/calculadora-avanzada";
import { fibonacci } from "../../../../../../src/es/geekshubs/academy/kata3/calculadora-avanzada";

describe("Testing Calculadora Avanzada Factorial ", function () {

    test("Operacion Factorial 0 = 1", () => {
        const expected = 1
        const result = factorial(0)
        expect(result).toBe(expected)
    });

    test('Operacion Factorial 1 = 1', function () {
        const expected = 1
        const result = factorial(1)
        expect(result).toBe(expected)
    });
    
    test('Operacion Factorial 4 = 4*3*2*1 = 24', function () {
        const expected = 24
        const result = factorial(4)
        expect(result).toBe(expected)
    });
  
    
});

describe("Testing Calculadora Avanzada Fibonacci ", function () {

    test("Operacion Fibonacci 0 = 0", () => {
        const expected = 0
        const result = fibonacci(0)
        expect(result).toBe(expected)
    });

    test('Operacion Fibonacci 1 = 1', function () {
        const expected = 1
        const result = fibonacci(1)
        expect(result).toBe(expected)
    });
    
    test('Operacion Fibonacci 10 = 55', function () {
        const expected = 55
        const result = fibonacci(10)
        expect(result).toBe(expected)
    });
    
});

