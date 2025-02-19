/* const user = {
    name: 'Ritik',
    age: 24,
}



try{
    console.log(user.address.city) 
} catch (err) {
    console.dir(err.message)
} finally {
    console.log('Hello World');
}


console.log(3 + 3);
 */



async function makeSyncRequest() {
    try {
        const url = 'https://dummyjso.com/products?delay=2000'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    return data
    } catch (err){
        console.log(err);
        console.log('something went wrong');
    }
}

makeSyncRequest()