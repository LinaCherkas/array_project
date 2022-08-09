class GoogleStoreHomeElementPage {
    open() {
        cy.visit('https://store.google.com/us/?hl=en-US&regionRedirect=true')
    }

    chooseElementClick(element) {
        return cy.get(`a[aria-label*="${element.name}"]`).click()
    }

    buyButtonClick() {
        return cy.contains('button', 'Buy').eq(0).click({ force: true })
    }

    chooseColor(colors, randomColor) {
        if (colors != null) {
            cy.contains("[data-test='total-price']", '/month', {
                timeout: 10000,
            }).should('be.visible')
            cy.get(`div[aria-label=${randomColor}]`).click({ force: true })
        }
    }

    choosePrice(price, randomPrice) {
        if (typeof price !== 'string' && price.length > 1) {
            cy.contains("[data-test='total-price']", '/month', {
                timeout: 12000,
            }).should('be.visible')
            cy.contains('div', randomPrice[0]).click({ force: true })
        }
    }

    addToCartButtonClick() {
        return cy
            .get("button[aria-label*='Add to cart']")
            .click({ force: true })
    }

    waitingCartQuantityElement(elementQuantity) {
        cy.contains(
            `span[aria-label*='${elementQuantity} item in cart']`,
            elementQuantity,
            {
                timeout: 10000,
            }
        ).should('be.visible')
    }
}

export default new GoogleStoreHomeElementPage()
