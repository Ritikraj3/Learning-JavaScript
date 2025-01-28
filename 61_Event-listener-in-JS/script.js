const h1 = document.querySelector('h1')
const card = document.querySelector('.card')
const container = document.querySelector(".container")

function sayHi() {
    console.log('hiiii');
}
function secondSayHii() {
    console.log('hiiii');
}

// h1.onclick = sayHi

// h1.addEventListener('click', sayHi)
// h1.addEventListener('click', secondSayHii)

// card.addEventListener('click', function(){
//     console.log('Ritik Raj');
// })


// function myCard(){                           
//     for(let i = 0; i <= 10; i++){                       HERE FOR PRINT ALL THE CARD AT ONCE!
//         const newCard = card.cloneNode('.card')
// newCard.innerText = i
// container.append(newCard)
//     }
// }

// ************************************************************************************************************

// let count = 1

// card.addEventListener('click', () => {
//     const newCard = card.cloneNode();                WITH THE USE OF cloneNODE
//     newCard.classList.remove('add-card')
//     newCard.innerText = count++;
//     container.append(newCard);
// } )

// ************************************************************************************************************

// WITH THE USE OF createElement

let count = 1

card.addEventListener('click', () => {
    const newCard = document.createElement('div')         
    newCard.classList.add('card')
    newCard.innerText = count
    count++
    container.append(newCard)
})