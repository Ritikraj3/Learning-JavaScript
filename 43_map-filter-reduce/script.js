const months = ['January', 'February', 'March', 'April', 'may', 'December']

// const capitalMonths = months.forEach((month) => {
//     console.log(month);
//     return month.toUpperCase()
// })

const capitalMonths = months.map((month, index, array) => {
    // console.log(index +1, month);
    // console.log(array);
    // return month.toUpperCase()
})


// const filteredMonths = months.filter((month, index , array) => {
//     console.log(month.toLocaleLowerCase().includes('m'));
//     // console.log(array);
//     return  month.toLocaleLowerCase().includes('m')
// })


const filteredMonths = months.filter((month, index , array) => {
    // console.log(month.toLocaleLowerCase().includes('m'));
    // console.log(array);
    // return  index >= 3
})

const students = [
    {
        name: 'Ritik',
        age: 24,
    },

    {
        name: 'Sachin',
        age: 18
    },

    {
        name: 'Roopam',
        age: 25
    },

    {
        name: 'Raz',
        age: 16
    },
    {
        name: 'Rishabh',
        age: 22
    },

    {
        name: 'dibu',
        age: 15
    }
]

// const adultStudents = students.filter((student) => {
//     // console.log(student.age >= 18);
//     return student.age >= 18
// }).map((student) => {
//     return student.name
// }).filter((student) => {
//     return student.includes('R')
// })
