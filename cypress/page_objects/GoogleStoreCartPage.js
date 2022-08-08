class GoogleStoreCartPage {
    openCartClick() {
        return cy.get('a[data-test*="header-cart"]').click()
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

    checkProductCartQuantity(productCartQuantity) {
        return cy.contains('span', `(${productCartQuantity} item)`).should('exist')
    }

    checkProductQuantityInCart(productQuantity) {
        return cy.get(`select[data-selected-quantity=${productQuantity}]`).should('exist')
    }
}

export default new GoogleStoreCartPage()
