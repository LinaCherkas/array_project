import Chance from 'chance'
const chance = new Chance()

let randomAge = chance.age()

//method with if
if (randomAge < 13) console.log(`${randomAge} is age for child`)
else if (randomAge >= 13 && randomAge < 20)
    console.log(`${randomAge} is age for teen`)
else if (randomAge >= 20 && randomAge < 60)
    console.log(`${randomAge} is age for adult`)
else console.log(`${randomAge} is age for senior`)

//method with switch
switch (true) {
    case randomAge < 13:
        console.log(`${randomAge} is age for child`)
        break
    case randomAge >= 13 && randomAge < 20:
        console.log(`${randomAge} is age for teen`)
        break
    case randomAge >= 20 && randomAge < 60:
        console.log(`${randomAge} is age for adult`)
        break
    default:
        console.log(`${randomAge} is age for senior`)
}

//method with operator
randomAge < 13
    ? console.log(`${randomAge} is age for child`)
    : randomAge >= 13 && randomAge < 20
    ? console.log(`${randomAge} is age for teen`)
    : randomAge >= 20 && randomAge < 60
    ? console.log(`${randomAge} is age for adult`)
    : console.log(`${randomAge} is age for senior`)
