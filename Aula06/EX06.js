/*Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()).

Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.
Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro
foi publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual.

Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de
publicação.

Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação,
são exibidas corretamente. */

let anoAtual = new Date().getFullYear()

const livro = {
    titulo: "Harry Potter e a Pedra Filosofal",
    autor: "Jk Rowling",
    anoPublicacao: 1997,
    genero: "Fantasia e Ficção",
    idadePublicação: null
}
livro.idadePublicação = (anoAtual - livro.anoPublicacao)

// Formatando o String
mostrarDetalhes = `Titulo: ${livro.titulo} \nAutor: ${livro.autor} \nAno de publicação: ${livro.anoPublicacao} \nGenero: ${livro.genero} \nIdade de publicação: ${livro.idadePublicação}`

// Printando a string
console.log(mostrarDetalhes)