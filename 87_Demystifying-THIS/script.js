// function Hii() {
//     console.log(this);
// }

// new Hii()   //when we call a function with 'new' keyword then regular function act as a constructor function.
            // constructor function create an object and return the object automatically.
            // constructor function is being denoted by Capital letter.
            // And 'This' will point that returned object.

// const user = {
//     firstName: 'Ritik',
//     lastName: 'Raj',
//     tags: ['a', 'b', 'c'],
//     printTags() {
//         this.tags.forEach(function(tag) {
//             console.log(tag, this.firstName);
//             console.log(this);
//         }, this)
//     }
// }

const body = document.querySelector('body')

body.addEventListener('click', function(e) {
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(this);         // this will always point where eventlistener is placed.
})


// const user = {
//     firstName: 'Ritik',
//     lastName: 'Raj',
//     tags: ['a', 'b', 'c'],
//     printTags: () => {
//         console.log(this);   // In case of arrow function 'this' is pointing to body instead of user.
//     }                        //Additional source :  Arrow functions don't have their own bindings to 
//                              //this, arguments,  or super, and should not be used as methods.
// }


class User {
    constructor () {
        this.firstName = 'Ritik'
        console.log(this);
    }

    getUser() {
        console.log(this);
    }
}