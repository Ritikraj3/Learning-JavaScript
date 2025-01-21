function multiply (a , b = 1) {
    return a * b
}

function rollADie(numberofSides = 6){
    return Math.floor(Math.random() * numberofSides) + 1
}