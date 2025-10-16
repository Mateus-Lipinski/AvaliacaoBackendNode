class ServiceOperacao {

    Soma(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Favor informar somente números")
        }
        return (num1 + num2)
    }

    Subtracao(num1, num2) {
        if (isNaN(num1 || isNaN(num2))) {
            throw new Error("Favor informar somente números")
        }
        return (num1 - num2)
    }

    Multiplicacao(num1, num2) {
        if (isNaN(num1 || isNaN(num2))) {
            throw new Error("Favor informar somente números")
        }
        return (num1 * num2)
    }

    Divisao(num1, num2) {
        if (isNaN(num1 || isNaN(num2))) {
            throw new Error("Favor informar somente números")
        }
        return (num1 / num2)
    }

    Potenciacao(num1, num2) {
        if (isNaN(num1 || isNaN(num2))) {
            throw new Error("Favor informar somente números")
        }
        return (num1 ** num2)
    }

    Raiz(num1) {
        if (isNaN(num1)) {
            throw new Error("Favor informar somente números")
        }
        return (num1**(0.5))
    }

    Disponiveis() {
        return ("Lista das operações disponíveis: Somar, Subtrair, Multiplicação, Divisão, Potenciação, e Radiciação")
    }
}

export default new ServiceOperacao