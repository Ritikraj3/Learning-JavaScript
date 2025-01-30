// we can use keyboard event on any element but it should be focused
const h1 = document.querySelector('h1')

h1.addEventListener('keypress', (e) => {
    console.log(e.key);
})