const evenNumber = [0, 2 , 4 ,6 ,8 , 10 , 12 , 14 , 16 , 18]

// evenNumber.shift()
// evenNumber.unshift()

const animalsList = ['Lion', 'Tiger', 'Wolves', 'Jaguar', 'Leopard']

const alphabet = ['a' , 'c' , 'd' , 'e' ,]

const allArray = evenNumber.concat(animalsList , alphabet)

const elementIndex = animalsList.indexOf('Jaguar')
const includes = animalsList.includes('Leopard')

animalsList.slice(5)
animalsList.slice(2 , 4)

animalsList.splice(1 , 3)

animalsList.splice(1 , 1 , 'elephant' , 99)