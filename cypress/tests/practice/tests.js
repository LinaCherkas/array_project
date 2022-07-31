import Chance from 'chance'
import GoogleStoreHomeElementPage from '../../page_objects/GoogleStoreHome&ElementPage'
import GoogleStoreCartPage from '../../page_objects/GoogleStoreCartPage'
const chance = new Chance()

describe('Practise tests', function () {
    before(() => {
        cy.fixture('data').as('products')
    })
    it('Test 1', function () {
        let randomColor, randomPrice
        this.products.forEach((element) => {
            cy.log('GIVEN user is on the Google Store page')
            GoogleStoreHomeElementPage.open()

            cy.log('WHEN the user chooses the product')
            GoogleStoreHomeElementPage.chooseElement(element).click()

            cy.log("AND clicks 'Buy' button")
            GoogleStoreHomeElementPage.buyButton.click({ force: true })
            if (element.colors !== null)
                randomColor = chance.pickset(element.colors, 1)
            randomPrice = chance.pickset(element.price, 1)

            cy.log('AND chooses the Color and the Price of the Product')
            GoogleStoreHomeElementPage.chooseColorAndPrice(
                element,
                randomColor,
                randomPrice
            )

            cy.log('AND adds product to the cart')
            GoogleStoreHomeElementPage.addToCartButton.click({ force: true })
            GoogleStoreHomeElementPage.waitingElement()

            cy.log('AND clicks on the cart icon to open the cart')
            GoogleStoreCartPage.openCart.click()

            cy.log(
                'THEN the product name from the cart should be matched with the product name from the file'
            )
            GoogleStoreCartPage.checkProductName(element.cart_name)

            cy.log(
                'AND the product color from the cart should be matched with the product color from the file'
            )
            if (element.colors != null)
                GoogleStoreCartPage.checkProductColor(randomColor[0])
            else cy.log('No color for such product')

            cy.log(
                'AND the product price from the cart should be matched with the product price from the file'
            )
            if (typeof element.price !== 'string' && element.price.length > 1)
                GoogleStoreCartPage.checkProductPrice(randomPrice[0])
            else cy.contains('p', element.price).should('exist')

            cy.log('AND the items quantity in the cart should be 1')
            GoogleStoreCartPage.checkProductCartQuantity()

            cy.log('AND the product quantity in the cart should be 1')
            GoogleStoreCartPage.checkProductQuantityinCart()
            cy.clearCookies()
        })
    })
})
