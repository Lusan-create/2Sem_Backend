// Escopo de variavel (Checa se é global ou local)

let valor = 20; // declara variavel como global(Está fora de qualquer variável)
if(1>0){
    console.log(valor + 10);// Declara uma variável local
}
console.log(valor);
valor =5;
console.log(valor);