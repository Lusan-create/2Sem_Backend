/* Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push(). Imprima no
console os itens presentes no array para verificar se os números foram adicionados. Em seguida, substitua o primeiro elemento
do array (índice 0) pelo dobro do seu valor atual. Imprima no console o array atualizado para verificar a mudança.
*/

//  Cria array
let meuArray = [];

//  Adiciona 3 números ao array e printa a lista
while (meuArray.length <= 3){ //Função para encher a lista com números aleatorios
meuArray.push(Math.floor(Math.random() * 10))
}
console.log("Lista original")
console.log(meuArray)

//  Subistitui o primeiro número do array pelo seu dobro
meuArray [0] = meuArray [0] * 2

//  retorna a lista final
console.log("Lista com o primeiro número dobrado")
console.log(meuArray)