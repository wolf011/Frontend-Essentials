var frutas = new Array();
let cores = [];
let cursos = ["Java", "PHP"];

cursos.push("React"); //Insere no final
cursos.push(1000);
cursos.unshift("Delphi"); //Insere no início

cursos.sort();
cursos.reverse();

cursos.shift();//remove
cursos.pop();//remove

cursos.splice(0, 1);//remove elmento a partir do ínidce

for (let i = 0; i < cursos.length; i++) {
    console.log(cursos[i]);
};


const livro = {
    autor: "Laércio de Vasconcelos",
    páginas: 50,
    linguagem: "Português"
};

console.log(livro.páginas);