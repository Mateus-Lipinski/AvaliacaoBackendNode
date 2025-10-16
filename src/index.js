import express from "express"
import router from "./routes/operacoes.js"

const porta = 3000

const app = express()
app.use(express.json())

//Routes
app.use("/avaliacao", router)

app.listen(porta, () => {
    console.log(`Rodando o servidor na porta ${porta}`)    
})