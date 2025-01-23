// const allImages = document.images
// const allImages = document.getElementsByTagName('img')
// const cssImage = document.getElementsByClassName('css-image')[0]
// const cssImage = document.getElementById('css-image')
// const cssImage = document.querySelectorALL('.css-image')
// const cssImage = document.querySelector("#css-image");
// const jsImage = document.querySelector('[alt="javascript roadmap"]');
const ul = document.querySelector("ul");

const imageInsideUl = ul.querySelector('.css-image')

const allImages = document.querySelectorAll('img') 

const imageUrl = [
  "https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/640781/pexels-photo-640781.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=400",
];

// allImages[0].src = imageUrl[0]
// allImages[1].src = imageUrl[1]
// allImages[2].src = imageUrl[2]

// for (let i = 0; i < allImages.length; i++) {
//     allImages[i].src = imageUrl[i]
// }

allImages.forEach((image, i) => {
    image.src = imageUrl[i]
})