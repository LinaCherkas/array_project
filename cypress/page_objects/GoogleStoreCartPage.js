class GoogleStoreCartPage {
    get openCart() {
        return cy.get('a[data-test*="header-cart"]')
    }

    checkProductName(name) {
        cy.contains(name).should('exist')
    }

    checkProductColor(color) {
        cy.contains(color).should('exist')
    }

    checkProductPrice(price) {
        cy.contains('p', price).should('exist')
    }

    checkProductCartQuantity() {
        return cy.contains('span', '(1 item)').should('exist')
    }

    checkProductQuantityinCart() {
        return cy.get('select[data-selected-quantity="1"]').should('exist')
    }
}

export default new GoogleStoreCartPage()
