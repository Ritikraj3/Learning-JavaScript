// Async Request
// By using .then method
//.then does not stop the execution

/* async function makeAsyncRequest() {
    const url = 'https://dummyjson.com/products/?delay=5000'
    const responsePromise = fetch(url)
    responsePromise.then((res) => (res).json()).then((data) => {
        console.log(data);
        console.log('hii');
    })
}

makeAsyncRequest() */

//*************************************************************************** */

// by using await key in the beginning of fetch
       //await stops the execution

async function makeSyncRequest() {
    const url = 'https://dummyjson.com/products?delay=5000'
    // const data = await ((await fetch(url)).json())
    // console.log(data);
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data);
    return data
}

makeSyncRequest().then(console.log)
/* ****************************************** */
//without asyn function , will have to add type = "module" in html

// const url = 'https://dummyjson.com/products?delay=5000'
// const response = await fetch(url)
// const data = await response.json()
// console.log(data);               


/***************************************************************************** */

// This is a synchronous request  
// to make a synchronous request we add false after the url

/* function makeSyncRequest() {
    const xhr = new XMLHttpRequest()
    xhr.addEventListener('load', () => {
    image.src = JSON.parse(xhr.response).message
    console.log(xhr);
})
xhr.open('GET', 'https://dummyjson.com/products/?delay=5000', false)
xhr.send()
} */


// function addTwoNumbers() {
//     return 5 + 8
// }




