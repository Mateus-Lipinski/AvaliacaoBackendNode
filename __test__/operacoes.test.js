import {describe, it, expect} from '@jest/globals'
import ServiceOperacao from '../src/services/operacoes.js'

describe("Testando a função Soma", () => {

    it("Testando dois valores positivos", () => {
        const resultado = ServiceOperacao.Soma(2, 2)
        expect(resultado).toBe(4)
    })

    it("Testando um valor zero", () => {
        const resultado = ServiceOperacao.Soma(2, 0)
        expect(resultado).toBe(2)
    })

    it("Testando um valor negativo", () => {
        const resultado = ServiceOperacao.Soma(-2, 4)
        expect(resultado).toBe(2)
    })

    
    it("Testando dois valores negativos", () => {
        const resultado = ServiceOperacao.Soma(-2, -2)
        expect(resultado).toBe(-4)
    })
})

// ---------------------------------------------------------------

describe("Testando a função Subtração", () => {

    it("Testando dois valores positivos", () => {
        const resultado = ServiceOperacao.Subtracao(4, 2)
        expect(resultado).toBe(2)
    })
    
    it("Testando um valor zero, como segundo número", () => {
        const resultado = ServiceOperacao.Subtracao(2, 0)
        expect(resultado).toBe(2)
    })
    
    it("Testando um valor zero, como o primeiro número", () => {
        const resultado = ServiceOperacao.Subtracao(0, 2)
        expect(resultado).toBe(-2)
    })
    
    it("Testando um valor negativo", () => {
        const resultado = ServiceOperacao.Subtracao(2, -4)
        expect(resultado).toBe(6)
    })

    it("Testando dois valores negativos", () => {
        const resultado = ServiceOperacao.Subtracao(-2, -4)
        expect(resultado).toBe(2)
    })
})

// ---------------------------------------------------------------

describe("Testando a função Multiplicação", () => {

    it("Testando dois valores positivos", () => {
        const resultado = ServiceOperacao.Multiplicacao(2, 4)
        expect(resultado).toBe(8)
    })

    it("Testando um valor decimal", () => {
        const resultado = ServiceOperacao.Multiplicacao(2, 1.5)
        expect(resultado).toBe(3)
    })

    it("Testando um valor zero", () => {
        const resultado = ServiceOperacao.Multiplicacao(2, 0)
        expect(resultado).toBe(0)
    })

    it("Testando um valor negativo", () => {
        const resultado = ServiceOperacao.Multiplicacao(2, -4)
        expect(resultado).toBe(-8)
    })

    it("Testando dois valores negativos", () => {
        const resultado = ServiceOperacao.Multiplicacao(-2, -4)
        expect(resultado).toBe(8)
    })
})

// ---------------------------------------------------------------

describe("Testando a função Dividir", () => {

    it("Testando dois valores positivos", () => {
        const resultado = ServiceOperacao.Divisao(4, 2)
        expect(resultado).toBe(2)
    })

    it("Testando um valor zero, como primeiro número", () => {
        const resultado = ServiceOperacao.Divisao(0, 2)
        expect(resultado).toBe(0)
    })

    it("Testando um valor zero, como segundo número", () => {
        const resultado = ServiceOperacao.Divisao(2, 0)
        expect(resultado).toBe(Infinity)
    })

    it("Testando um valor negativo", () => {
        const resultado = ServiceOperacao.Divisao(-4, 2)
        expect(resultado).toBe(-2)
    })

    it("Testando dois valores negativos", () => {
        const resultado = ServiceOperacao.Divisao(-4, -2)
        expect(resultado).toBe(2)
    })

    it("Testando um valor decimal", () => {
        const resultado = ServiceOperacao.Divisao(5, 2.5)
        expect(resultado).toBe(2)
    })
})

// ---------------------------------------------------------------

describe("Testando a função Potenciação", () => {

    it("Testando dois valores positivos", () => {
        const resultado = ServiceOperacao.Potenciacao(2, 5)
        expect(resultado).toBe(32)
    })

    it("Testando um valor zero, como primeiro número, e elevado a um", () => {
        const resultado = ServiceOperacao.Potenciacao(0, 2)
        expect(resultado).toBe(0)
    })

    it("Testando um valor zero, como primeiro número, e elevado a zero", () => {
        const resultado = ServiceOperacao.Potenciacao(0, 0)
        expect(resultado).toBe(1)
    })

    it("Testando um valor zero, como segundo número", () => {
        const resultado = ServiceOperacao.Potenciacao(2, 0)
        expect(resultado).toBe(1)
    })

    it("Testando um valor negativo", () => {
        const resultado = ServiceOperacao.Potenciacao(-2, 2)
        expect(resultado).toBe(4)
    })

    it("Testando dois valores negativos", () => {
        const resultado = ServiceOperacao.Potenciacao(-2, -2)
        expect(resultado).toBe(0.25)
    })

    it("Testando um valor negativo elevado a zero", () => {
        const resultado = ServiceOperacao.Potenciacao(-2, 0)
        expect(resultado).toBe(1)
    })
})

// ---------------------------------------------------------------

describe("Testando a função Raiz", () => {

    it("Testando um número positivo e com quadrado perfeito", () => {
        const resultado = ServiceOperacao.Raiz(4)
        expect(resultado).toBe(2)
    })
    
    it("Testando um número positivo e sem quadrado perfeito", () => {
        const resultado = ServiceOperacao.Raiz(2)
        expect(resultado).toBe(1.4142135623730951)
    })

    it("Testando um valor negativo", () => {
        const resultado = ServiceOperacao.Raiz(-2)
        expect(resultado).toBe(NaN)
    })

    
    it("Testando um número decimal", () => {
        const resultado = ServiceOperacao.Raiz(4.1)
        expect(resultado).toBe(2.0248456731316584)
    })

    it("Testando um número decimal", () => {
        const resultado = ServiceOperacao.Raiz(-4.1)
        expect(resultado).toBe(NaN)
    })
})