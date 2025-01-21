const nums1 = [1, 2, 3, 4]
const nums2 = [4, 5, 6, 8]

// const myName = 'Ritik'

const mergedArray = [...nums1, ...nums2, 9, 10]

// const user = {
//     name: 'Ritik',
//     age: 25,
// }

// const updatedUser = {...user, city: 'bangalore'}

function add() {
    let sum = 0
    for(let i = 0; i < arguments.length; i++){
        sum = sum + (arguments[i]);
    }
    return sum
}
