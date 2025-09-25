/* Crie um programa em Node.js que inicie com um array de cinco elementos e atribua um novo 
valor para a primeira posição (indice 0) desse array. Em seguida, exiba o array antes e depois da alteração  */


//  Cria a lista com números aleatórios
let lista = []; //Cria a lista

while (lista.length <= 5){ //Função para encher a lista com números aleatorios
lista.push(Math.floor(Math.random() * 10))
}
console.log(lista)


//  Apresentando o número que será adicionado
let num = Math.floor(Math.random() * 10)
console.log("Número que será adicionado: ", num)

//  Adicionando o sexto número
lista.push(num)

//Retorna a lista atulizada e sinaliza o fim do programa
console.log(lista)
