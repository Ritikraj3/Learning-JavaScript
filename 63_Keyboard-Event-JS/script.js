// we can use keyboard event on any element but it should be focused
// const h1 = document.querySelector('h1')

window.addEventListener('keypress', (e) => {
    console.log('value', e.key);
    console.log('code', e.code);
})
window.addEventListener('keyup', (e) => {
    console.log('value', e.key);
    console.log('code', e.code);
})
window.addEventListener('keydown', (e) => {
    console.log('value', e.key);
    console.log('code', e.code);
})