/*Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de
publicação. Depois altere o gênero do livro para "Aventura".*/

// Cria o objeto livro
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

// Retorna o objeto original
console.log("Objeto original")
console.log(livro)

// Muda o genero para aventura
livro.genero = "Aventura"

// Printa o objeto modificado
console.log("\nObjeto modificado: ")
console.log(livro)