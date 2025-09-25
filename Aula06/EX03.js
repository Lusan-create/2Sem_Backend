/* 
Desenvolva um programa em Node.js que crie um array vazio e atribua valores a ele utilizando o método push(). Adicione três
números inteiros ao array e, em seguida, exiba o array resultante.
 */

//  Criando o array
array = []

// Coloca alguns números aleatórios no array
while (array.length <= 3){ //Função para encher a lista com números aleatorios
array.push(Math.floor(Math.random() * 10))
}
console.log("Lista original")
console.log(array)

// Adiciona 3 números inteiros 
while (array.length <= 6){ //Função para encher a lista com números aleatorios
array.push(Math.floor(Math.random() * 10))
}

//  Retorna a lista alterada
console.log("Lista após 3 adições")
console.log(array)