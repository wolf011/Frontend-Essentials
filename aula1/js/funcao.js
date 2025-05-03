
// função declarativa
function soma(a, b) {
    return a + b;
}

console.log(soma(10, 20));

const numeros = [1, 5, 10, 20];

function media(nums) {
    let somatoria = 0;
    for (let i = 0; i < nums.length; i++) {
        somatoria += nums[i];
    }
    return Math.round(somatoria / nums.length);
}

console.log("A média é: " + media(numeros));
