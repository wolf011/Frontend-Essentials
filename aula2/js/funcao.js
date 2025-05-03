

function calcular(a, b) {
    return a * b;
}

console.log("O resultado é: ", calcular(10, 2), "cm²");
console.log("O resultado é: " + calcular(10, 2) + "cm²");

// Template literal:
console.log(`O resultado é: ${calcular(10, 5)} unidades`);

const numeros = [2, 5, 8, 0, 10];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

const numerosMap = numeros.map((numero) => console.log(numero * 2));
numerosMap;

// Tanto o map quanto o for each não precisam de parenteses para seus parâmetros.
const numerosForEach = numeros.forEach(n => console.log(n * 5));
numerosForEach;

const numerosFiltro = numeros.filter((num) => num % 2 == 0);
console.log(numerosFiltro);

const names = ["Alexia", "Dilma", "Duda", "Hugo", "Fernando"];
const namesForeach = names.forEach(n=> console.log(n[0]));
namesForeach 