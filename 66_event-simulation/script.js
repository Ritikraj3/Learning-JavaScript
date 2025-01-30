const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')
const input = document.querySelector('input')
const form = document.querySelector('form')

let count = 1

addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})


//FOCUS EVENT RELATED TO INPUT
// setTimeout(() => {
//     input.focus()
//     console.log('input focused');
// }, 2000)

// setTimeout(() => {
//     input.focus()
//     console.log('input blurred');
// }, 4000)

// setTimeout(() => {
//     form.submit()
//     console.log('form submitted');
// }, 2000)

// form.reset()

//*********************************************************** */

// const intervalId = setInterval(() => {
//     if (count > 999) {
//         clearInterval(intervalId)
//     }
//     addCardBtn.click()
// },5)