import currencyConverterPage from '../page_objects/currencyConverterPage'

describe('Convert currency test', () => {
    before(() => {
        cy.fixture('currency').then((data) => {
            cy.wrap(data).as('currency')
        })
    })

    it(`Test 1`, () => {
        cy.get('@currency').then((currency) => {
            cy.log('GIVEN user is on the site')
            currencyConverterPage.open()

            cy.log('WHEN user input the currency types')
            let currencyToConvert = chance.pickone(currency.rates)
            currencyConverterPage.performConvertation(
                currency,
                currencyToConvert
            )

            cy.log('THEN the currency results should be matched')
            currencyConverterPage.checkResult(currencyToConvert)
        })
    })
})
