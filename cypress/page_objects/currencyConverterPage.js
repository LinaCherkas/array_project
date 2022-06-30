class CurrencyConverterPage {
    open() {
        cy.visit('https://www.xe.com/')
    }

    get inputFromCurrency() {
        return cy.get("#midmarketFromCurrency")
    }

    get inputToCurrency() {
        return cy.get("#midmarketToCurrency")
    }

    get convertButton() {
        return cy.get("button[type='submit']")
    }

    checkResult(currency) {
        cy.contains("p[class*='result__BigRate']",currency.rate).should('exist')
    }

    performConvertation(currencyFromConvert, currencyToConvert) {
        this.inputFromCurrency.type(`${currencyFromConvert.base}`)
        this.inputToCurrency.type(`${currencyToConvert.shortName}`)
        this.convertButton.click({force: true})
    }
}

export default new CurrencyConverterPage()
