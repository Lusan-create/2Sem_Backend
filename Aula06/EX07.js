/* Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de
publicação. Depois, utilize colchetes para acessar diretamente as propriedades do objeto livro e imprimir no
console os detalhes do livro.
*/

// Criando o objeto
let anoAtual = new Date().getFullYear()
const livro = {
    titulo: "Harry Potter e a Pedra Filosofal",
    autor: "Jk Rowling",
    anoPublicacao: 1997,
    genero: "Fantasia e Ficção",
    idadePublicação: null
}
livro.idadePublicação = (anoAtual - livro.anoPublicacao)

// Printando utilizando as chaves
mostrarDetalhes = `Titulo: ${livro.titulo} \nAutor: ${livro.autor} \nAno de publicação: ${livro.anoPublicacao} \nGenero: ${livro.genero} \nIdade de publicação: ${livro.idadePublicação}`
