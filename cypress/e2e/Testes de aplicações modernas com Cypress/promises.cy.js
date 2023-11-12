it('sem testes ainda', () => {
    cy.log()
})

// SEM PROMISES
//
// const getSomething = () => 10
//
// const system = () => {
//     console.log('init')
//     const something = getSomething()
//     console.log(`Something is ${something}`)
//     console.log('end')
// }
//
// Ou:
//
// const getSomething = () => {
//     setTimeout(() => {
//         console.log('respondendo...')
//         return 11;
//     }, 1000)
// }
//
// const system = () => {
//     console.log('init')
//     const something = getSomething()
//     console.log(`Something is ${something}`)
//     console.log('end')
// }
//
// Ou:
//
// const getSomething = callback => {
//     setTimeout(() => {
//         callback(12);
//     }, 1000)
// }

// const system = () => {
//     console.log('init')
//     getSomething(some => console.log(`Something is ${some}`))
//     console.log('end')
// }
//
// Ou:
//
//
// const getSomething = callback => {
//     setTimeout(() => {
//         callback(12);
//     }, 1000)
// }
//
// const system = () => {
//     console.log('init')
//     getSomething(some => {
//         console.log(`Something is ${some}`)
//         console.log('end')
//     })
// }
//
// system()
//
//
// COM PROMISES
//
//
// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(13)
//         }, 1000)
//     })
// }

// const system = () => {
//     console.log('init')
//     const prom = getSomething()
//     prom.then(some => {
//         console.log(`Something is ${some}`)
//         console.log('end') 
//     }) 
// }
//
// Ou:
//

const getSomething = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(13)
        }, 1000)
    })
}

const system = () => {
    console.log('init')
    getSomething().then(some => {
        console.log(`Something is ${some}`)
        console.log('end') 
    }) 
}

system()

//
// COM ASYNC
//
// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(13)
//         }, 1000)
//     })
// }

// const system = () => {
//     console.log('init')
//     const some = await getSomething()
//     console.log(`Something is ${some}`)
//     console.log('end')
// }

// system()