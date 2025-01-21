function add() {
    let sum = 0
    for(let i = 0; i < arguments.length; i++) {
        console.log(...arguments);
        sum = sum + arguments[i]
    }
    return sum
}

