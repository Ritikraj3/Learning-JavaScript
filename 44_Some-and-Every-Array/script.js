const evenNumbers = [0, 2, 4, 6, 8]


evenNumbers.some((num, i) => {
    if( num % 2 === 1) {
        console.log(i);
    }
    return num % 2 === 1
})


evenNumbers.every((num, ) => {
    debugger
    return num % 2 === 1
})


