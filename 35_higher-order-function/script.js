function a(b) {
  console.dir(b);

  b();
}

// function sayHi() {
//   console.log("Hiiiiiiiiiiiiiiiiii");
// }

// a(sayHi);

//now a function is the higher order function because we are passing a function to the a function




//callback function = function sayHi() {
   //                   console.log("Hiiiiiiiiiiiiiiiiii");
   //                   }




a(function () {
    console.log("Hiiiiiiiiiiiiiiiiii");
  })

  // anonymous function to call a
debugger
function greet(name, callback) {
  return callback(`Hello, ${name}!`);
}

function toUpperCase(str) {
  return str.toUpperCase();
}

console.log(greet("John", toUpperCase));