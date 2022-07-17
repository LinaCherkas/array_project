import Chance from 'chance'
const chance = new Chance()

function if_method(randomAge) {
    if (randomAge < 13) console.log(`${randomAge} is the age for child`)
    else if (randomAge >= 13 && randomAge < 20)
        console.log(`${randomAge} is the age for teen`)
    else if (randomAge >= 20 && randomAge < 60)
        console.log(`${randomAge} is the age for adult`)
    else console.log(`${randomAge} is the age for senior`)
}

function switch_method(randomAge){
switch (true) {
    case randomAge < 13:
        console.log(`${randomAge} is the age for child`)
        break
    case randomAge >= 13 && randomAge < 20:
        console.log(`${randomAge} is the age for teen`)
        break
    case randomAge >= 20 && randomAge < 60:
        console.log(`${randomAge} is the age for adult`)
        break
    default:
        console.log(`${randomAge} is the age for senior`)
}}

function operator_method(randomAge){
randomAge < 13
    ? console.log(`${randomAge} is the age for child`)
    : randomAge >= 13 && randomAge < 20
    ? console.log(`${randomAge} is the age for teen`)
    : randomAge >= 20 && randomAge < 60
    ? console.log(`${randomAge} is the age for adult`)
    : console.log(`${randomAge} is the age for senior`)
}

let randomAge = chance.age()
if_method(randomAge)
switch_method(randomAge)
operator_method(randomAge)