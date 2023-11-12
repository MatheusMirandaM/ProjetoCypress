it('nada agora', function () {})

// comentar linhas é o CTRL + K CTRL + C 

// FUNCTION
// function soma(a + b) {
//     return a + b
// }

// const soma = function (a, b) {
//     return a + b
// }

// ARROW FUNCTION
// const soma = (a, b) => {
//     return a + b
// }

// ou:

// const soma = (a, b) => a + b

// const soma = (a) => a + a

// const soma = a => a + a

const soma = () => 1 + 4

console.log(soma(1, 4))

// EXEMPLOS:

// FUNCTION
it('a funcyion test...', function () {
    console.log('Function', this)
})

// ARROW FUNCTION
it('an arrow funcyion test...', () => {
    console.log('Arrow', this)
})