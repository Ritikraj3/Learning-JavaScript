
// if (dayNumber === 0) {
//   console.log('It is Sunday Today')
// } else if (dayNumber === 1) {
//   console.log('It is Monday Today')
// } else if (dayNumber === 2) {
//   console.log('It is Tuesday Today')
// } else if (dayNumber === 3) {
//   console.log('It is Wednesday Today')
// } else if (dayNumber === 4) {
//   console.log('It is Thursday Today')
// } else if (dayNumber === 5) {
//   console.log('It is Friday Today')
// } else if (dayNumber === 6) {
//   console.log('It is Saturday Today')
// } else {
//   console.log('Please Enter a Valid Day Number')
// }
const dayNumber = 3

// debugger

// switch (dayNumber) {
//     case 0:
//         console.log('It is sunday Today')
//         break
//     case 1:
//         console.log('It is Monday Today')
//         break
//     case 2:
//         console.log('It is Tuesday Today')    
//         break
//     case 3:
//         console.log('It is Wednesday Today')   
//         break 
//     case 4:
//         console.log('It is Thursday Today')    
//         break
//     case 5:
//         console.log('It is Friday Today')    
//         break
//     case 6:
//         console.log('It is Saturday Today')  
        
//     default:
//         console.log('Please enter a valid number.');
        
// }
const username ='Ritik'
const userAge = 24


// if (userAge >= 0 && userAge <= 4) {
//     console.log(`${username} is a kid.`);
//     console.log('And he/she is playing.');
// } else if (userAge >= 5 && userAge <= 17) {
//     console.log(`${username} is a school student.`);
//     console.log('And he/she is learning science and maths.');
// } else if (userAge >= 18 && userAge <= 24) {
//     console.log(`${username} is a college student.`);
//     console.log('And he/she is learning computer science.');
// } else if (userAge >= 25 && userAge <= 45) {
//     console.log(`${username} is a working professional.`);
//     console.log('And he/she is a web developer.');
// } else if (userAge > 45 && userAge < 121) {
//     console.log(`${username} is retired.`);
//     console.log('And he/she reads newspaper.');
// } else if (userAge >= 121) {
//     console.log(`${username} is immortal.`);
//     console.log('And he/she reads newspaper.');
// } else {
//     console.log('Please Enter a Valid Age');
// }

// switch(true){
//     case userAge >= 0 && userAge <= 4:
//         console.log(`${username} is a kid.`);
//         break
//     case userAge >= 5 && userAge <= 17:
//         console.log(`${username} is a school student.`);
//         break
//     case userAge >= 18 && userAge <= 24:
//         console.log(`${username} is a college student.`);
//         break
//     case userAge >= 25 && userAge <= 45:
//         console.log(`${username} is a working professional.`);
//         break
//     case userAge > 45 && userAge < 121:
//         console.log(`${username} is retired.`);
//         break
//     case userAge >= 121:
//         console.log(`${username} is immortal.`);
//         break
//     default:
//         console.log('Please Enter a Valid Age');
// }

const grade = 'A'

switch(grade.toLocaleLowerCase()) {
    case 'A':
        console.log('Your score is between 90 % to 100%');
        break

    case 'B':
        console.log('Your score is between 80% to 90%');
        break

        case 'C':
        console.log('Your score is between 70% to 80%');
        break

    case 'D':
        console.log('Your score is between 60% to 70%');
        break

    default:
        console.log('Sorry! you failed');
}
    





console.log('program ended!');