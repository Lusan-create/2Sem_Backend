/*Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de
publicação. Depois, adicione uma nova propriedade chamada avaliacao. Esta propriedade deve ser
inicializada como null.
No final do arquivo livro.js, adicione uma avaliação ao objeto.
Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro.
Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação.*/

//Importa readline
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


//  Criando o objeto
let anoAtual = new Date().getFullYear()
const livro = {
    titulo: "Harry Potter e a Pedra Filosofal",
    autor: "Jk Rowling",
    anoPublicacao: 1997,
    genero: "Fantasia e Ficção",
    idadePublicação: null,
    avaliacao: null,

    avaliaLivro(){
        rl.question("Escreva a nota do livro:  ", (nota) =>{
            livro.avaliacao = nota;
            console.log(`Nota do livro: ${livro.avaliacao}`) // printa a nota do livro
            rl.close();
        })
    }
}
livro.idadePublicação = (anoAtual - livro.anoPublicacao)

if (livro.avaliacao === null){
    livro.avaliaLivro()
}