// Exemplo de Armazenando informações digitadas pelo usuário

let readline = require('readline');// Biblioteca que permite armazenar informações digitadas

//Cria uma interface de leitura
const rl =readline.createInterface({
    input:process.stdin, //Gerencia processo de entrada do node
    output:process.stdout // Gerencia processo de saída do node
});

// Pergunta ao usuário
rl.question(`Digite algo: `, (answer)=>{

    //Resposta do usuário
    console.log(`Você digitou ${answer}`);
    rl.close(); // Fecha a caixa de pergunta
}) 
    
console.log(readline);