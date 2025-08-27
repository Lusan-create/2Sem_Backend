//cria a váriavel para armazenar o express
const express = require('express');

let dados = []
// Cria uma instância de Express
const app = express()

// Defina a porta que vai rodar a API
const porta = 3000;

//Lista os dados para armazenar os dados cadastrados

// Middleware para processar a resposta no formato json
app.use(express.json());


// Cria a rota na raiz da API
app.get('/', (red,res)=>{
    res.send('Meu pau está Durão :--')
});

// Inicia o servidor e a porta
app.listen(porta,()=>{
    console.log(`Servidor rodando na porta ${porta}`)
});

// Adicionando uma Rota POST
app.post('/data', (req, res) =>{
    const {nome, idade} = req.body;
    res.send(`Nome: ${nome}, Idade: ${idade}`)

    if(!nome || !idade){
        return res.status(400).json({error: "Informe nome e idade"})
    }
    const novo = {nome,idade};
    dados.push(novo)
    res.status(201).json({message: "dados salvos com sucesso!", data:novo})
})

//Rota get para exibir dados
app.get("/data", (req,res)=>{
    res.json(dados);
})

// Inicia servidor e define sua porta
//app.listen inicia o servidor na porta desejada
app.listen(porta,()=>{
    console.log(`Servidor rodando na porta ${porta}`);
})