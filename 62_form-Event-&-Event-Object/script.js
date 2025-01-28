const usernameInput = document.querySelector('#username')
const paragraph = document.querySelector('p')
const form = document.querySelector('form')

// usernameInput.addEventListener('click', () => {
//     console.log('input clicked');
// })

// usernameInput.addEventListener('dblclick', () => {
//     console.log('input double clicked');
// })

// let inputValue

// usernameInput.addEventListener('input', (e) => {
//     console.log(e.target.value);
//     inputValue = e.target.value
//     paragraph.innerText = e.target.value
// })


// usernameInput.addEventListener('change', (e) => {
//     console.log(e.target.value);
//     inputValue = e.target.value
//     paragraph.innerText = e.target.value
// })

// usernameInput.addEventListener('focus', (e) => {
//     console.log(e);
//     console.log(e.target.value);
//     inputValue = e.target.value
//     paragraph.innerText = e.target.value
// })

// usernameInput.addEventListener('blur', (e) => {
//     console.log(e.type);
//     console.log(e.target.value);
//     inputValue = e.target.value
//     paragraph.innerText = e.target.value
// })

form.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e.target);
    console.log('Form clicked');
})