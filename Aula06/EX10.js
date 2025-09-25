/*Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de
publicação. Em seguida, exclua a propriedade avaliacao do objeto livro. Depois, exiba os detalhes do livro
no console, verificando se as informações atualizadas, sem a avaliação, são exibidas corretamente.*/

// Criando um objeto para
let anoAtual = new Date().getFullYear()
const livro = {
    titulo: "Harry Potter e a Pedra Filosofal",
    autor: "Jk Rowling",
    anoPublicacao: 1997,
    genero: "Fantasia e Ficção",
    idadePublicação: null,
    avaliacao: null,
}
livro.idadePublicação = (anoAtual - livro.anoPublicacao)

// Printando o objeto antes da mudança
console.log("Objeto original: ")
console.log(livro)

//  Deletando o atributo do objeto
delete livro.avaliacao

//  Retornando a lista após a mudança
console.log("Após a retirada da propridade: ")
console.log(livro)