const pessoas = [
    { nome: "Marcos", idade: 20, cidade: "Rio de Janeiro" },
    { nome: "Carla", idade: 50, cidade: "Petrópolis" },
    { nome: "Mariana", idade: 18, cidade: "Duque de Caxias" },
    { nome: "Gilberto", idade: 60, cidade: "Juiz de Fora" },
];

pessoas
    .filter((p) => p.cidade === "Rio de Janeiro")
    .forEach((p) => console.log(`Nome: ${p.nome} idade: ${p.idade}`));

pessoas
    .filter((p) => p.cidade === "Petrópolis" && p.idade >= 40)
    .forEach((p) => console.log(`Nome: ${p.nome} idade: ${p.idade}`));

pessoas.filter((p) => p.nome.toLocaleLowerCase().includes("m")).forEach((p) => console.log(p.nome));