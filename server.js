const express = require("express");
const Pool = require("pg").Pool
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
});

const app = express()
app.use(express.json())

const produto = []

app.post('/produtos', (req,res) => {
    const body = req.body
    if(produtoInvalido(body)){
        res.status(400).send({
            message: 
            "Algo deu errado. Nome e/ou descrição do produto faltando."
        })
    }

    pool.query("INSERT INTO produto.produto (nome, descricao, preco, estoque) VALUES ($1, $2, $3, $4)", [body.nome, body.descricao, body.preco, body.estoque], (error,result) => {
        if(error){
            res.status(500).send(error)
        } else{
            res.status(201).end()
        }
    })
})

app.put("/produtos/:id", (req, res) => {
    const produtoId = parseInt(req.params.id)
    const body = req.body

    if(produtoInvalido(body)){
        res.status(400).send({
            message: "Algo deu errado. Nome e/ou descrição do produto faltando."
        })
    }

    pool.query("UPDATE produto.produto SET nome = $1, descricao = $2, preco = $3, estoque = $4 WHERE id = $5 RETURNING *", [body.nome, body.descricao, body.preco, body.estoque, produtoId], (error, result) => {
        if(error){
            res.status(500).send(error)
        } else{
            if(result.rowCount == 0){
                res.status(404).json({message: "Produto não encontrado"})
            } else{
                res.status(200).json(result.rows[0])
            }
        }
    })
})

app.get('/produtos', (req, res) => {
    pool.query("SELECT * FROM produto.produto", (error, result) => {
        if(error){
            res.status(500).send(error)
        } else{
            res.status(200).json(result.rows)
        }
    })
})

app.get('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id)


    pool.query("SELECT * FROM produto.produto WHERE id = $1", [id], (error,result) => {
        if(error){
            res.status(500).send(error)
        } else{
            if(result.rowCount == 0){
                res.status(404).json({message: "Produto não encontrado"})
            }
            else{
                res.status(200).json(result.rows[0])
            }
        }
    })
})

app.delete("/produtos/:id", (req,res) =>{
    const id = parseInt(req.params.id)

    pool.query("DELETE FROM produto.produto WHERE id = $1", [id], (error, result) => {
        if(error){
            res.status(500).send(error)
        } else{
            if(result.rowCount ==0){
                res.status(404).json({message: "Produto não encontrado."})
            } else{
                res.status(200).end()
            }
        }
    })
})

const produtoInvalido = (produto) => {
    if(produto.nome == null || produto.nome.trim() == ""){
        return false
    }
    if(produto.descricao == null || produto.descricao.trim() == ""){
        return false
    }
}


app.listen(3000, () => console.log('Servidor Conectado na porta 3000'))
