const resolveBtn = document.querySelector('#resolve-button')
const rejectBtn = document.querySelector('#reject-button')

const p = new Promise((resolve, reject) => {

    resolveBtn.addEventListener('click', () => {
        resolve('Promise resolved')
    })

    rejectBtn.addEventListener('click', () => {
        reject('Promise rejected')
    })
})

p.then((data) => {
    console.log(data);
    return 33
}).then((data) => {
    console.log(data);
    return 'Ritik'
}).then ((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})

// setTimeout(() => {
//     console.log('hiii');
// })