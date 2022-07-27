const requestProducts =
    'https://storage.googleapis.com/mannequin/2018/data/productwall/accessories/en_us.json?c=1571310916'

describe('Async tests', function () {
    describe('Test 1', function () {
        before(() => {
            cy.request('GET', requestProducts).its('body').as('response')
        })

        it('Test 1 with before', function () {
            printObject(this.response.products[0])
            cy.log(`Products length - ${this.response.products.length}`)
        })
    })

    describe('Test 2', function () {
        it('Test 2 with it', function () {
            cy.request('GET', requestProducts).then((response) => {
                cy.wrap(response.body).as('response')
            })

            cy.get('@response').then((productsList) => {
                printObject(productsList.products[0])
                cy.log(`Products length - ${productsList.products.length}`)
            })
        })
    })

    describe('Test 3', function () {
        it('Test 3 with promise', function () {
            getPromise().then((data) => {
                printObject(data.products[0])
                cy.log(`Products length - ${data.products.length}`)
            })
        })
    })
})

function printObject(object) {
    cy.log(`Object data:
        ${Object.keys(object)
            .map((key) => key + ':' + object[key])
            .join(', ')}`)
}

function getPromise() {
    return new Promise((resolve, reject) => {
        cy.request('GET', requestProducts).then((response) => {
            resolve(response.body)
            reject(`Error in promise`)
        })
    })
}
