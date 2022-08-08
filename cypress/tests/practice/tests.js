import Chance from 'chance'
import GoogleStoreHomeElementPage from '../../page_objects/GoogleStoreHome&ElementPage'
import GoogleStoreCartPage from '../../page_objects/GoogleStoreCartPage'
import products from '../../fixtures/data.json'
const chance = new Chance()

/*describe('User is able to add the products to the cart', function () {

    beforeEach(() => {
        cy.log('GIVEN user is on the Google Store page')
        GoogleStoreHomeElementPage.open()
    })

    products.forEach((element) => {
    it(`Test for ${element.name}`, function () {
            let randomColor, randomPrice
            if (element.colors !== null)
            {randomColor = chance.pickset(element.colors, 1)}
            randomPrice = chance.pickset(element.price, 1)

            cy.log('WHEN the user chooses the product')
            GoogleStoreHomeElementPage.chooseElementClick(element)

            cy.log("AND clicks 'Buy' button")
            GoogleStoreHomeElementPage.buyButtonClick()

            cy.log('AND chooses the Color and the Price of the Product')
            GoogleStoreHomeElementPage.chooseColor(
                element,
                randomColor)
            GoogleStoreHomeElementPage.choosePrice(
            element,
            randomPrice)

            cy.log('AND adds product to the cart')
            GoogleStoreHomeElementPage.addToCartButtonClick()
            GoogleStoreHomeElementPage.waitingCartQuantityElement("1")

            cy.log('AND clicks on the cart icon to open the cart')
            GoogleStoreCartPage.openCartClick()

            cy.log(
                'THEN the product name from the cart should be matched with the product name from the file'
            )
            GoogleStoreCartPage.checkProductName(element.cart_name)

            cy.log(
                'AND the product color from the cart should be matched with the product color from the file'
            )
            if (element.colors != null)
                {GoogleStoreCartPage.checkProductColor(randomColor[0])}
            else cy.log('No color for such product')

            cy.log(
                'AND the product price from the cart should be matched with the product price from the file'
            )
            if (typeof element.price !== 'string' && element.price.length > 1)
               { GoogleStoreCartPage.checkProductPrice(randomPrice[0])}
            else cy.contains('p', element.price).should('exist')

            cy.log('AND the items quantity in the cart should be 1')
            GoogleStoreCartPage.checkProductCartQuantity("1")

            cy.log('AND the product quantity in the cart should be 1')
            GoogleStoreCartPage.checkProductQuantityInCart("1")
            cy.clearCookies()
        })
    })
})*/
let totalPrice = 0
describe('User story: User is able to change the quantity of products in the card', function () {
    let randomColor, randomPrice
    beforeEach(() => {
        products.forEach((element) => {
            if (element.colors !== null)
            {randomColor = chance.pickset(element.colors, 1)}
            randomPrice = chance.pickset(element.price, 1)
            addProductToCart(element, randomPrice, randomColor)
        })
    })


    it('Check the data of the edit products', {defaultCommandTimeout:10000}, function () {
        cy.visit('https://store.google.com/us/cart?hl=en-US')

        let count = 2

        for(let i=0; i<2; i++) //product forEach
        {
            cy.get('select[aria-label="Product Quantity"]').eq(i).select('2')
        }

        products.forEach((element) => {
            GoogleStoreCartPage.checkProductName(element.cart_name)
            if (element.colors != null) { ////
                GoogleStoreCartPage.checkProductColor(randomColor[0])
            } else {
                cy.log('No color for such product')
            }
            if (typeof element.price !== 'string' && element.price.length > 1)
            {GoogleStoreCartPage.checkProductPrice(randomPrice[0])}
            else {cy.contains('p', element.price).should('exist')}
            GoogleStoreCartPage.checkProductQuantityInCart("2")

            if (typeof element.price !== 'string' && element.price.length > 1)
            {let price1=randomPrice[0].substring(1)
                totalPrice+=parseFloat(price1)*count}
            else {let price1=element.price.substring(1)
                totalPrice+=parseFloat(price1)*count}

            if(element.saving_price!=null) {
                cy.wait(10000)
                cy.get('body').then((body) => {
                    if (body.find("circle[cx='6.5']").length > 0) {
                        totalPrice -=  parseFloat(element.saving_price.substring(1) * count / 2)
                        console.log(totalPrice)
                    }
                });
            }
            else {console.log("final" + totalPrice)}
        })
        console.log("final2" + totalPrice)
    })

})

function addProductToCart(element, randomPrice, randomColor){
    GoogleStoreHomeElementPage.open()
    GoogleStoreHomeElementPage.chooseElementClick(element)
    GoogleStoreHomeElementPage.buyButtonClick()
    GoogleStoreHomeElementPage.chooseColor(
        element,
        randomColor)
    GoogleStoreHomeElementPage.choosePrice(
        element,
        randomPrice)
    GoogleStoreHomeElementPage.addToCartButtonClick()
}