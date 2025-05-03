function assincrona() {

    setTimeout(() => {
        console.log("função assíncrona");
    }, 2000);
    }

console.log("Início");
assincrona();
console.log("Fim do programa!")
