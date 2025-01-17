const fruits = ['banana', 'apple', 'peach', 'mango', 'grapes']

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log('*******************************');

for(const fruit of fruits) {
    console.log(fruit);
}

const user = 'Ritik Raj'

for(const letter of user) {
    console.log(letter);
}

const person = {
    firstName: 'Ritik',
    lastName: 'Raj',
    age: 24,
    eyeColor: 'brown',
    city: 'banglore'

}

for(const key in person) {
    console.log(key, ': ' , person[key]);
}

const personKeys = Object.keys(person)
const personValues = Object.values(person)
const personEntries = Object.entries(person)

for(const key of personKeys) {
    console.log(person[key]);
}