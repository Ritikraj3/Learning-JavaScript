const h1 = document.querySelector('h1')
const addCardButton = document.querySelector('.card')
const container = document.querySelector(".container")

let count = 1

// addCardButton.addEventListener('click', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count
//     count++
//     container.append(newCard)
// })
 
// card.addEventListener('dblclick', () => {
//     const newCard = document.createElement('div')         
//     newCard.classList.add('card')
//     newCard.innerText = count
//     count++
//     container.append(newCard)
// })

// addCardButton.addEventListener('mousedown', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count
//     count++
//     container.append(newCard)
// })

// addCardButton.addEventListener('mouseup', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count
//     count++
//     container.append(newCard)
// })

// addCardButton.addEventListener('mouseenter', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count
//     count++
//     container.append(newCard)
// })

// addButton.addEventListener('mouseenter', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count
//     count++
//     container.append(newCard)
// })

// addCardButton.addEventListener('mouseleave', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count
//     count++
//     container.append(newCard)
// })

// addCardButton.addEventListener('mousemove', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count
//     count++
//     container.append(newCard)
// })


//mouseover event works on child element too, if it is there or else it works like mouseenter
// addCardButton.addEventListener('mouseover', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count
//     count++
//     container.append(newCard)
// })

// addCardButton.addEventListener('wheel', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count
//     count++
//     container.append(newCard)
// })

// addCardButton.addEventListener('touchstart', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count
//     count++
//     container.append(newCard)
// })

// addCardButton.addEventListener('touchend', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count
//     count++
//     container.append(newCard)
// })

// addCardButton.addEventListener('touchmove', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count
//     count++
//     container.append(newCard)
// })

// addCardButton.addEventListener('pointermove', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count
//     count++
//     container.append(newCard)
// })

// addCardButton.addEventListener('pointermove', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count
//     count++
//     container.append(newCard)
// })

addCardButton.addEventListener('pointermove', (e) => {
    console.log(e);
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count
    count++
    container.append(newCard)
})

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// document.addEventListener('wheel', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count
//     count++
//     container.append(newCard)
// })

// h1.addEventListener('drag', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count
//     count++
//     container.append(newCard)
// })