// Import Bibliotecas
const express = require("express");

//Listas


// Instência do Express
const app = express();


// Porta da API
const port = 3000;


// Definição do formato de requisição
app.use(express.json());


//Rota GET
app.get('/', (req, res) =>{
    res.send("Sistema Planta 4.0")
});

app.post("/cadastro", (req, res) =>{
    res.send(`Nome do Produto: ${produto}, Quantidade: ${qtd}`)
})