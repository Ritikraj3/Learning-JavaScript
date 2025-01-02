console.log('Program Started');

// debugger

// let i = 0
// while(i <= 100) {
//     console.log(i);
//     i = i + 1
// }

const friends = ['Setu', 'Sachin', 'Rohit', 'Shubham', 'Rishi']

let i = 0
while(i < friends.length){
    console.log(`${i + 1}. ${friends[i] + ' singh'}`);
    friends[i] = friends[i] + ' raj'
    i++
}

console.log('Program Ended');