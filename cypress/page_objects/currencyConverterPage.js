class CurrencyConverterPage {
    open() {
        cy.visit('https://www.xe.com/')
    }

    get inputFromCurrency() {
        return cy.get("input[id='midmarketFromCurrency']")
    }

    get inputToCurrency() {
        return cy.get("input[id='midmarketToCurrency']")
    }

    get convertButton() {
        return cy.get("button[type='submit']")
    }

    checkResult(currency) {
        cy.contains(currency.rate.toString()).should('exist')
    }

    performConvertation(currencyFromConvert, currencyToConvert) {
        this.inputFromCurrency.type(`${currencyFromConvert.base}{enter}`)
        this.inputToCurrency.type(`${currencyToConvert.shortName}{enter}`)
        this.convertButton.click()
    }
}

export default new CurrencyConverterPage()
