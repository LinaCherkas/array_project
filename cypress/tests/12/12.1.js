import 'chance'
import { isSuperset, difference, union, intersection } from '../../utils/helper'

it('Array task 1-5', () => {
    //task 1
    let currencySet = new Set(['RUB', 'BYN', 'EUR'])

    //task 2
    cy.log('First array output')
    currencySet.forEach((currency) => {
        cy.log(currency)
    })

    //task 3
    currencySet.add('PLN').add('PLN').add('USD')

    let additional_currency = new Set(['UAN', 'UAN', 'SEK'])
    additional_currency.forEach((currency) => {
        currencySet.add(currency)
    })

    cy.log('Second array output')
    currencySet.forEach((currency) => {
        cy.log(currency)
    })

    //task 4
    cy.log(`Set has UAN value: ${currencySet.has('UAN')}`)
    currencySet.delete('UAN')
    cy.log(`Set has UAN value: ${currencySet.has('UAN')}`)

    //task 5
    let currencyArray = Array.from(currencySet)
    cy.log(`1 random value: ${chance.pickone(currencyArray)}`)
    const randomValues = chance.pickset(currencyArray, chance.integer({ min: 1, max: currencySet.size }))
    cy.log(`Few random values: ${randomValues}`)})

//task 6
it('Array task 6', () => {
    let setA = new Set(['RUB', 'BYN', 'EUR', 'UAN'])
    let setB = new Set(['USD', 'RUB', 'UAN'])
    let setC = new Set(['RUB', 'SEK', 'BYN', 'PLN'])

    cy.log(`isSuperset: ${isSuperset(setA, setB)}`)

    cy.log('Union:')
    const Union = union(setA, setC)
    Union.forEach((currency) => {
        cy.log(currency)
    })

    cy.log('Intersection:')
    const inters = intersection(setA, setB)
    inters.forEach((currency) => {
        cy.log(currency)
    })

    cy.log('Difference:')
    const diff = difference(setA, setC)
    diff.forEach((currency) => {
        cy.log(currency)
    })
})
