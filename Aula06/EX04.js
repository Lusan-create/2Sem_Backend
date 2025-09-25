/*Desenvolva um programa em Node.js que simule uma clínica veterinária. Crie um array vazio chamado clinica que
representará a fila de animais na clínica. Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de
animais no console. Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.*/

// Cria o array chamado clinica
let clinica = []

// Simulação de chegada de animais
console.log("Clinica: ")

clinica.push("Cachorro")
console.log("Cachorro entrou na clinica")
console.log(clinica)

clinica.push("Gato")
console.log("Gato entrou na clinica")
console.log(clinica)

clinica.push("Jacaré")
console.log("Jacaré entrou na clinica")
console.log(clinica)

//  Retornando a lista 
console.log("\nClinica:")
console.log(clinica)
console.log("\n")

// Removendo os animais 
console.log("Cachorro saiu da clinica")
clinica.shift()
console.log(clinica)

console.log("Gato saiu da clinica")
clinica.shift()
console.log(clinica)

console.log("Jacaré saiu da clinica")
clinica.shift()
console.log(clinica)

console.log("\nA clinica está vazia:", clinica)