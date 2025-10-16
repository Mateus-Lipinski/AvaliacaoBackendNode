import express from "express"
import ControllerOperacao from "../controllers/operacoes.js"

const router = express.Router()

router.post("/soma", ControllerOperacao.Soma)
router.post("/subtracao", ControllerOperacao.Subtracao)
router.post("/multiplicacao", ControllerOperacao.Multiplicacao)
router.post("/divisao", ControllerOperacao.Divisao)
router.post("/potenciacao", ControllerOperacao.Potenciacao)
router.post("/raiz", ControllerOperacao.Raiz)

router.get("/disponiveis", ControllerOperacao.Disponiveis)

export default router