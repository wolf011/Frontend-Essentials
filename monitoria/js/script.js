
/*
    As funções usadas nesse arquivo, são funções "built-in" do javascript.
    Para usá-las, precisamos informar uma função callback como parâmetro.
*/

// -> forEach
/* 
    O forEach é usado para percorrer uma lista e executar uma
    determinada ação a cada loop, sem que tenha um retorno.
    Neste exemplo, eu usei o forEach somente para mostrar os 
    itens no nosso console
*/

const arrayParaForEach = [0, 1, 2, 3];

arrayParaForEach.forEach((item) => {
    console.log("No forEach: ", item);
});

// -> map
/*
    O map é usado para percorrer um array, executar determinada
    ação, e em sequência retornar um novo array
*/
const arrayParaMap = [0, 1, 2, 3];

const novoArray = new Array(
    arrayParaMap.map((item) => {
        return item + 1;
    })
);

console.log(`Array inicial: ${arrayParaMap}, Array retornado pelo map: ${novoArray}`);

// -> reduce

/* 
    O reduce é usado quando queremos reduzir um array a 
    um único valor (que poderia até mesmo ser outro array)
*/

/* 
    Neste exemplo usamos o reduce para retornar o valor de um somatório
*/

const arrayParaReduce = [0, 1, 2, 3];

// 0, 1, 2, 3
const somatorio = arrayParaReduce.reduce((acumulador, item) => {
    return acumulador + item;
}, 0);

console.log("Reduce somatório: ", somatorio);

/* 
    Neste exemplo usamos o reduce para retornar outro array, sendo que
    cada número terá uma soma 
*/

//0, 1, 2, 3
const resultado = arrayParaReduce.reduce((acumulador, item) => {
    acumulador.push(item + 1);
    return acumulador;
}, []);

console.log("Reduce retornando array: ", resultado);

// -> filter

/*
    O filter retornará uma lista de itens, que satisfaçam a condição
    que retorne "vardadeiro" ou "falso".
    Neste exemplo, usamos o filter para buscar todos os itens que sejam
    maiores ou iguais a 30.
*/

const arrayParaFilter = [90, 10, 15, 30, 30, 40, 60];

const resultadoFilter = arrayParaFilter.filter((item) => {
    return item >= 30;
});

console.log("Resultado do filter:", resultadoFilter);

// -> find

/* 
    O find buscará um item numa lista, que satisfaça uma condição e 
    retorne "verdadeiro" ou "falso"
    Nesse exemplo, usamos o find para buscar um item que seja igual a 30.
*/

// Exemplo do find com array de números:
const arrayParaFind = [
    90,
    10,
    15,
    30, // Item encontrado
    30,
    40,
    60
];

const resultadoFind = arrayParaFind.find((item) => {
    return item === 30;
})

console.log("Resultado do find:", resultadoFind);

// Exemplo do find com array de objetos:
// (Esse é um dos usos mais comuns dessa função)

const arrayParaFindObjeto = [
    { id: 0, nome: "Paula" },
    { id: 1, nome: "Márcio" },
    { id: 2, nome: "Rafaela" }, // Item encontrado
    { id: 3, nome: "Rômulo" },
    { id: 4, nome: "Rafaela" },
];

const resultadoFindObjeto = arrayParaFindObjeto.find((item) => {
    return item.nome === "Rafaela"; // Busca o primeiro item que tenha nome: "Rafaela"
})

console.log("Resultado do find, buscando por objeto:", resultadoFindObjeto);