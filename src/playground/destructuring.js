//
// Obejct Destructuring
//

const person = {
    name: 'Eric',
    age: 35,
    location: {
        city: 'CABA',
        temp: 25
    }
}
const {name:firstName = 'Anonymous', age} = person
console.log(`${firstName} is ${age}`)
const {city:personCity, temp:temperature} = person.location

console.log(`It's ${temperature}ºC in ${personCity} `)

//
// Array  Destructuring
//

const address = ['Aguirre 540', undefined, 'Buenos Aires', '1414']

const [street, city = 'CABA', state] = address
console.log(`You're in ${city}, ${state}`)
