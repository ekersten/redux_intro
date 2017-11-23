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
const {city, temp:temperature} = person.location

console.log(`It's ${temperature}ºC in ${city} `)