let planetsArray = [
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
let planetsMap = new Map()

for (let key in planetsArray) {
    planetsMap.set(planetsArray[key].planet, {
        radius: planetsArray[key].radius,
        density: planetsArray[key].density,
        distance: planetsArray[key].distance,
    })
}

//task 2
it('Task 2:', () => {
    planetsMap.forEach((value, key) => {
        cy.log(
            key +
                ': ' +
                Object.keys(value)
                    .map((objKey) => objKey + ':' + value[objKey])
                    .join(', ')
        )
    })
})

//task 3
it('Task 3:', () => {
    let planet = planetsMap.get('Saturn')
    let printPlanet = Object.keys(planet)
        .map((key) => key + ':' + planet[key])
        .join(', ')
    cy.log(`Saturn - ${printPlanet}`)
})

//task 4
it('Task 4:', () => {
    cy.log(`Elements quantity = ${planetsMap.size}`)
})

//task 5
it('Task 5:', () => {
    let set_variable = new Set(['Mercury', 'Not Mercury'])
    set_variable.forEach((element) => {
        if (planetsMap.has(element)) cy.log('Mercury exists')
    })
})

//task 6
planetsMap.delete('Uranus')

//task 7
it('Task 7:', () => {
    let planetsMap2 = new Map([
        [
            'TestPlanet1',
            { radius: '45674', density: '5647689', distance: '467987' },
        ],
        [
            'TestPlanet2',
            { radius: '35685', density: '12345', distance: '76547' },
        ],
    ])
    const merged = new Map([...planetsMap, ...planetsMap2])
    merged.forEach((value, key) => {
        cy.log(
            key +
                ': ' +
                Object.keys(value)
                    .map((objKey) => objKey + ':' + value[objKey])
                    .join(', ')
        )
    })
})

//task 8
it('Task 8:', () => {
    planetsArray.forEach((element) => {
        for (let key in element) {
            if (key === 'planet') cy.log(`Planet - ${element['planet']}`)
            else cy.log(`${key}: ${element[key]}`)
        }
    })
})
