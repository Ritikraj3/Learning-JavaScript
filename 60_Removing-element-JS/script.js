const h1 = document.querySelector('h1')
const container = document.querySelector(".container")
// const firstImage = document.querySelector("img")

const paragraph = document.createElement("p")
// paragraph.innerText = 'Hello World!'
// paragraph.classList.add('my-para')
// paragraph.id = 'hii'
// container.append(paragraph)


// container.appendChild(h1)
// container.appendChild(h1.cloneNode(true))

// for (let i = 2; i <=100; i++) {
//     const newCard = card.cloneNode()
//     newCard.innerText = i
//     container.append(newCard)
// }

// for (let i = 1; i <= 100; i++){
//     const newImage = firstImage.cloneNode('img')
//     newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//     container.append(newImage)
// }

for (let i = 1; i <= 100; i++){
    const newImage = document.createElement('img')
    newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    container.append(newImage)
}
