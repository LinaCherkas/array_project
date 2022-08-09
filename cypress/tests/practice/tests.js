import Chance from 'chance'
import GoogleStoreHomeElementPage from '../../page_objects/GoogleStoreHome&ElementPage'
import GoogleStoreCartPage from '../../page_objects/GoogleStoreCartPage'
import products from '../../fixtures/data.json'
const chance = new Chance()

describe('User is able to add the products to the cart', function () {
    beforeEach(() => {
        cy.log('GIVEN user is on the Google Store page')
        GoogleStoreHomeElementPage.open()
    })

    products.forEach((element) => {
        it(`Test for ${element.name}`, function () {
            let randomColor, randomPrice
            if (element.colors !== null) {
                randomColor = chance.pickset(element.colors, 1)
            }
            randomPrice = chance.pickset(element.price, 1)

            cy.log('WHEN the user chooses the product')
            GoogleStoreHomeElementPage.chooseElementClick(element)

            cy.log("AND clicks 'Buy' button")
            GoogleStoreHomeElementPage.buyButtonClick()

            cy.log('AND chooses the Color and the Price of the Product')
            GoogleStoreHomeElementPage.chooseColor(element, randomColor)
            GoogleStoreHomeElementPage.choosePrice(element, randomPrice)

            cy.log('AND adds product to the cart')
            GoogleStoreHomeElementPage.addToCartButtonClick()
            GoogleStoreHomeElementPage.waitingCartQuantityElement('1')

            cy.log('AND clicks on the cart icon to open the cart')
            GoogleStoreCartPage.openCartClick()

            cy.log(
                'THEN the product name from the cart should be matched with the product name from the file'
            )
            GoogleStoreCartPage.checkProductName(element.cart_name)

            cy.log(
                'AND the product color from the cart should be matched with the product color from the file'
            )

            GoogleStoreCartPage.checkProductColor(
                element.colors,
                randomColor[0]
            )

            cy.log(
                'AND the product price from the cart should be matched with the product price from the file'
            )

            GoogleStoreCartPage.checkProductPrice(element.price, randomPrice[0])

            cy.log('AND the items quantity in the cart should be 1')
            GoogleStoreCartPage.checkProductCartQuantity('1')

            cy.log('AND the product quantity in the cart should be 1')
            GoogleStoreCartPage.checkProductQuantityInCart('1')
            cy.clearCookies()
        })
    })
})

describe('User story: User is able to change the quantity of products in the cart', function () {
    let randomColor = new Map()
    let randomPrice = new Map()
    let productQuantity = '2'
    beforeEach(() => {
        products.forEach((element) => {
            if (element.colors !== null) {
                randomColor.set(element.name, chance.pickset(element.colors, 1))
            }
            randomPrice.set(element.name, chance.pickset(element.price, 1))
            addProductToCart(
                element,
                randomPrice.get(element.name),
                randomColor.get(element.name)
            )
        })
    })

    it(
        'Check the data of the edit products',
        { defaultCommandTimeout: 10000 },
        function () {
            cy.log('GIVEN user is in the Cart')
            GoogleStoreCartPage.visitCart()

            cy.log('WHEN the changes the products quantity in the cart')
            products.forEach((element, index) => {
                cy.get('select[aria-label="Product Quantity"]')
                    .eq(index)
                    .select(productQuantity)
            })

            cy.log('THEN the right products data should be displayed')
            products.forEach((element) => {
                GoogleStoreCartPage.checkProductName(element.cart_name)
                GoogleStoreCartPage.checkProductColor(
                    element.colors,
                    randomColor.get(element.name)
                )
                GoogleStoreCartPage.checkProductPrice(
                    element.price,
                    randomPrice.get(element.name)
                )
            })

            cy.log('AND the right Subtotal price should be displayed')
            GoogleStoreCartPage.checkTotalPrice(
                products,
                randomPrice,
                productQuantity
            )
        }
    )
})

function addProductToCart(element, randomPrice, randomColor) {
    GoogleStoreHomeElementPage.open()
    GoogleStoreHomeElementPage.chooseElementClick(element)
    GoogleStoreHomeElementPage.buyButtonClick()
    GoogleStoreHomeElementPage.chooseColor(element, randomColor)
    GoogleStoreHomeElementPage.choosePrice(element, randomPrice)
    GoogleStoreHomeElementPage.addToCartButtonClick()
}
