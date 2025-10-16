import ServiceOperacao from "../services/operacoes.js"

class ControllerOperacao {

    Soma(req, res) {
        try {
            const num1 = req.body.num1
            const num2 = req.body.num2

            const resultado = ServiceOperacao.Soma(num1, num2)

            res.status(200).send({ data: { num1, num2, resultado } })
        } catch (error) {
            res.status(400).send({ msg: error.message })
        }
    }

    Subtracao(req, res) {
        try {
            const num1 = req.body.num1
            const num2 = req.body.num2

            const resultado = ServiceOperacao.Subtracao(num1, num2)

            res.status(200).send({ data: { num1, num2, resultado } })
        } catch (error) {
            res.status(400).send({ msg: error.message })
        }
    }

    Multiplicacao(req, res) {
        try {
            const num1 = req.body.num1
            const num2 = req.body.num2

            const resultado = ServiceOperacao.Multiplicacao(num1, num2)

            res.status(200).send({ data: { num1, num2, resultado } })
        } catch (error) {
            res.status(400).send({ msg: error.message })
        }
    }

    Divisao(req, res) {
        try {
            const num1 = req.body.num1
            const num2 = req.body.num2

            const resultado = ServiceOperacao.Divisao(num1, num2)

            res.status(200).send({ data: { num1, num2, resultado } })
        } catch (error) {
            res.status(400).send({ msg: error.message })
        }
    }

    Potenciacao(req, res) {
        try {
            const num1 = req.body.num1
            const num2 = req.body.num2

            const resultado = ServiceOperacao.Potenciacao(num1, num2)

            res.status(200).send({ data: { num1, num2, resultado } })
        } catch (error) {
            res.status(400).send({ msg: error.message })
        }
    }

    Raiz(req, res) {
        try {
            const num1 = req.body.num1

            const resultado = ServiceOperacao.Raiz(num1)

            res.status(200).send({ data: { num1, resultado } })
        } catch (error) {
            res.status(400).send({ msg: error.message })
        }
    }

    Disponiveis(req, res) {
        const lista = ServiceOperacao.Disponiveis()
        res.status(200).send({ data: { lista }})
    }
}

export default new ControllerOperacao