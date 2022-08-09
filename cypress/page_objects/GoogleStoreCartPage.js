class GoogleStoreCartPage {
    openCartClick() {
        return cy.get('a[data-test*="header-cart"]').click()
    }

    visitCart() {
        cy.visit('https://store.google.com/us/cart?hl=en-US')
    }

    checkProductName(name) {
        cy.contains(name).should('exist')
    }

    checkProductColor(color, randomColor) {
        if (color != null) {
            cy.contains(randomColor[0]).should('exist')
        } else {
            cy.log('No color for such product')
        }
    }

    checkProductPrice(price, randomPrice) {
        if (typeof price !== 'string' && price.length > 1) {
            cy.contains('p', randomPrice[0]).should('exist')
        } else {
            cy.contains('p', price).should('exist')
        }
    }

    checkProductCartQuantity(productCartQuantity) {
        return cy
            .contains('span', `(${productCartQuantity} item)`)
            .should('exist')
    }

    checkTotalPrice(products, randomPrice, productQuantity) {
        let totalPrice = 0
        products.forEach((element) => {
            let price =
                typeof element.price !== 'string' && element.price.length > 1
                    ? randomPrice.get(element.name)[0].substring(1)
                    : element.price.substring(1)
            totalPrice += parseFloat(price) * productQuantity
        })

        cy.get('p[class="B7xUP"]>span')
            .eq(0)
            .invoke('text')
            .then((text) => {
                expect(text.replace('$', '').replaceAll(',', '')).to.eq(
                    totalPrice.toString()
                )
            })
    }
}

export default new GoogleStoreCartPage()
