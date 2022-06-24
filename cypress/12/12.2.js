let planets = [
    { planet: 'Mercury', radius: 2440, density: 5.43, distance: 0.395 },
    { planet: 'Venus', radius: 6052, density: 5.24, distance: 0.723 },
    { planet: 'Earth', radius: 6378, density: 5.52, distance: 1 },
    { planet: 'Mars', radius: 3396, density: 3.93, distance: 1.53 },
    { planet: 'Jupiter', radius: 71492, density: 1.33, distance: 5.21 },
    { planet: 'Saturn', radius: 60268, density: 0.69, distance: 9.551 },
    { planet: 'Uranus', radius: 25559, density: 1.27, distance: 19.213 },
    { planet: 'Neptune', radius: 24764, density: 1.64, distance: 30.07 },
]

//task 1
function printObject(object) {
    for (let key in object) {
        if (key === 'planet') cy.log(`Planet - ${object['planet']}`)
        else cy.log(`${key}: ${object[key]}`)
    }
}

function printPlanets(array) {
    array.forEach((element) => printObject(element))
}

it('Print planets method:', () => {
    printPlanets(planets)
})

//task 2
let newPlanets = planets.map((planet) => ({ ...planet, solarSystem: true }))

function printPlanetsInRow(planets) {
    planets.forEach((planet) => {
        cy.log(
            Object.keys(planet)
                .map((key) => key + ':' + planet[key])
                .join(', ')
        )
    })
}

it('Task 2:', () => {
    printPlanetsInRow(newPlanets)
})

//task 3
newPlanets.push({
    planet: 'SomeNewPlanet',
    radius: 24764,
    density: 1.64,
    distance: 30.07,
    solarSystem: false,
})

//task 4
it('Task 4:', () => {
    let initialValue = 0
    let sumRadius = newPlanets.reduce(
        (accumulator, currentValue) => accumulator + currentValue.radius,
        initialValue
    )
    cy.log(`Sum of all the radiuses - ${sumRadius}`)
})

//task 5
it('Task 5:', () => {
    function getPlanetsWithDistance(array, distance) {
        return array.filter((element) => element.distance > distance)
    }

    cy.log('====Planets with distance > 5 ====')
    printPlanetsInRow(getPlanetsWithDistance(newPlanets, 5))
})

//task 6
it('Task 6:', () => {
    let index = newPlanets
        .map((object) => object.planet)
        .indexOf('SomeNewPlanet')
    newPlanets.splice(index, 1)
    printPlanetsInRow(newPlanets)
})

//task 7
it('Task 7:', () => {
    newPlanets.sort(function (firstItem, secondItem) {
        return secondItem.radius - firstItem.radius
    })
    printPlanetsInRow(newPlanets)
})

//task 8
it('Task 8:', () => {
    newPlanets.sort(function (firstItem, secondItem) {
        let firstLowerItem = firstItem.planet.toLowerCase()
        let secondLowerItem = secondItem.planet.toLowerCase()
        if (firstLowerItem < secondLowerItem) {
            return -1
        }
        if (firstLowerItem > secondLowerItem) {
            return 1
        }
        return 0
    })
    printPlanetsInRow(newPlanets)
})

//task 9
it('Task 9:', () => {
    cy.log(`Array length = ${newPlanets.length}`)
})
