const requestProducts =
    'https://storage.googleapis.com/mannequin/2018/data/productwall/accessories/en_us.json?c=1571310916'

function printFirstObject(object) {
    cy.log('First object data:')
    cy.log(
        Object.keys(object)
            .map((key) => key + ':' + object[key])
            .join(', ')
    )
}

function printObjectLength(object) {
    cy.log('Object length:')
    let k = 0
    for (let j = 0; j < object.filter_groups[0].subfilters.length; j++) {
        k += object.filter_groups[0].subfilters[j].filters.length
    }
    cy.log(k)
}

before(() => {
    cy.request(requestProducts).its('body').as('products')
})

it('Test 1 with before', function () {
    debugger
    let firstObject = this.products.filter_groups[0].subfilters[0].filters[0]
    printFirstObject(firstObject)
    printObjectLength(this.products)
})

it('Test 2 with it', function () {
    cy.request(requestProducts).then((response) => {
        cy.wrap(response.body).as('products')
    })

    cy.get('@products').then((productsList) => {
        let firstObject = productsList.filter_groups[0].subfilters[0].filters[0]
        printFirstObject(firstObject)
    })

    cy.get('@products').then((productsList) => {
        printObjectLength(productsList)
    })
})

it('Test 3 with promise', function () {
    let getPromise = new Promise((resolve, reject) => {
        try {
            cy.request(requestProducts).then((response) => {
                resolve(response.body)
            })
        } catch (err) {
            reject(`Error in promise ${err}`)
        }
    })

    getPromise.then((data) => {
        let firstObject = data.filter_groups[0].subfilters[0].filters[0]
        printFirstObject(firstObject)
        printObjectLength(data)
    })
})
