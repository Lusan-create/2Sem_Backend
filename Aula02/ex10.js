//Exemplo 2 capturando dados digitados pelo usuário

const readline = require('readline'); // Cria constante para armazenar a biblioteca readline

// Cria a interface para permitirque usuário digite informações
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

// Pergunta o primeiro valor 

rl.question('Digite o primeiro valor: ', (valor1)=>{
    rl.question('Digite o segundo  valor: ', valor2=>{
        console.log('Primeiro valor: ', valor1);
        console.log('Primeiro valor: ', valor2);
        console.log(valor1 + valor2);
        console.log(Number(valor1) + Number(valor2)); // Transforma em int para fazer a soma
        rl.close();
    })
});