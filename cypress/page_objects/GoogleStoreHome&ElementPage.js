class GoogleStoreHomeElementPage {
    open() {
        cy.visit('https://store.google.com/us/?hl=en-US&regionRedirect=true')
    }

    chooseElement(element) {
        return cy.get(`a[aria-label*="${element.name}"]`)
    }

    get buyButton() {
        return cy.contains('button', 'Buy').eq(0)
    }

    chooseColorAndPrice(element, randomColor, randomPrice) {
        if (element.colors != null) {
            cy.contains("[data-test='total-price']", '/month', {
                timeout: 10000,
            }).should('be.visible')
            cy.get(`div[aria-label=${randomColor}]`).click({ force: true })
        }
        if (typeof element.price !== 'string' && element.price.length > 1) {
            cy.contains("[data-test='total-price']", '/month', {
                timeout: 10000,
            }).should('be.visible')
            cy.contains('div', randomPrice[0]).click({ force: true })
        }
    }

    get addToCartButton() {
        return cy.get("button[aria-label*='Add to cart']")
    }

    waitingElement() {
        cy.contains("span[aria-label*='1 item in cart']", '1', {
            timeout: 10000,
        }).should('be.visible')
    }
}

export default new GoogleStoreHomeElementPage()
