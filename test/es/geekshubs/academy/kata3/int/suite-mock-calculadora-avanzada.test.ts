import { fibonacci } from "../../../../../../src/es/geekshubs/academy/kata3/calculadora-avanzada";

jest.mock("../../../../../../src/es/geekshubs/academy/kata3/calculadora-avanzada");

const mockFibonacci = fibonacci as jest.MockedFunction<typeof fibonacci>;

describe("Testing Calculadora Avanzada Fibonacci ", function () {
   test('(spy)Operacion Fibonacci 0 = 0', function () {
        const expected = 0
        const inputs = 0     
        mockFibonacci.mockReturnValue(expected)         
        const result = mockFibonacci(inputs)
        expect(mockFibonacci).toBeCalledWith(inputs)
    });
  
    test('(spy)Operacion Fibonacci 1 = 1', function () {
        const expected = 1
        const inputs = 1     
        mockFibonacci.mockReturnValue(expected)         
        const result = mockFibonacci(inputs)
        expect(mockFibonacci).toBeCalledWith(inputs)
    });

    test('(spy)Operacion Fibonacci 250 = 7896325826131730509282738943634332893686268675876375', function () {
        const expected = 7896325826131730509282738943634332893686268675876375
        const inputs = 250     
        mockFibonacci.mockReturnValue(expected)         
        const result = mockFibonacci(inputs)
        expect(mockFibonacci).toBeCalledWith(inputs)
    });
    
});

