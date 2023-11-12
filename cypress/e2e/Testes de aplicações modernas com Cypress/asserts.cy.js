it('Equality', () => {
    const a = 1

    expect(a).eq(1)
    expect(a, 'Deveria ser 1').eq(1)
    expect(a).to.eq(1)
    expect(a).to.be.eq(1)
    expect('a').not.be.eq('b')

    // expect(a, 'Deveria ser 1').eq(2)
})

it('Truthy 1', () => {
    const a = true

    expect(a).to.be.true
    expect(true).to.be.true
})

it('Truthy 2', () => {
    const a = true
    const b = null
    let c

    expect(b).to.be.null
    expect(a).not.to.be.null
    expect(a).to.be.not.null
    expect(c).to.be.undefined
})

it('Object Equality', () => {
    const obj = {
        a: 1,
        b: 2
    }

    expect(obj).eq(obj)
    expect(obj).to.be.eq(obj)
    expect(obj).equal(obj)
    expect(obj).to.be.equal(obj)
    expect(obj).equals(obj)
    expect(obj).to.be.equals(obj)
    expect(obj).to.be.deep.eq({ a: 1, b: 2 })
    expect(obj).eql({ a: 1, b: 2 })
    expect(obj).include({ a: 1 })
    expect(obj).to.have.property('b')
    expect(obj).to.have.property('b', 2)
    expect(obj).to.not.be.empty
    expect({}).to.be.empty

    // expect(obj).include({ a: 2 })
    // expect(obj).include({ c: 3 })
})

it('Arrays', () => {
    const arr = [1,2,3]

    expect(arr).to.have.members([1,2,3])
    expect(arr).to.include.members([1,3])
    expect(arr).to.not.be.empty
    expect([]).to.be.empty
})

it('Types', () => {
    const num = 1
    const str = 'String'

    expect(num).to.be.a('number')
    expect(str).to.be.a('string')
    expect({}).to.be.an('object')

    // expect([]).to.be.an('object')
})

it('Strings', () => {
    const str = 'String de teste'

    expect(str).to.be.eq('String de teste')
    expect(str).to.have.length(15) // Tamanho do texto
    expect(str).to.contains('de') // Contem o texto
    expect(str).to.match(/de/) // Possuio o texto
    expect(str).to.match(/String/) // Possuio o texto
    expect(str).to.match(/^String/) // Inicia com String
    expect(str).to.match(/teste$/) // Finaliza com teste
    expect(str).to.match(/.{15}/) // qualquer caractere e o tamanho
    expect(str).to.match(/\w+/) // existem apelas letras
    expect(str).to.match(/\D+/) // não contem numeros
})

it('Numbers', () => {
    const number = 4
    const floatNumber = 5.2123 // flutuante

    expect(number).to.be.eq(4)
    expect(number).to.be.above(3) // maior que
    expect(number).to.be.below(7) // menor que
    expect(floatNumber).to.be.closeTo(5.2, 0.1) // proximo de
    expect(floatNumber).to.be.above(5) // maior que

    // expect(floatNumber).to.be.eq(5.2123)
})
