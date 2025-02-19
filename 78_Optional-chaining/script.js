const user = {
    firstName: "Ritik",
    lastName: "Raj",
    age: 24,
    address: {
        city: 'Bangalore'
    },
    getFullName: function() {
        return user.firstName + ' ' + user.lastName
    }
  }

const a = 'city'
/* ************************************************************** */
// Error handling using if


//   if(user.address) {
//     console.log(user.address.city);
//   }

/* *************************************************************** */
// Error handling using && (logical AND operator)


// console.log(user.address && user.address.city);

/* ***************************************************************** */
// Error handling using Optional-chaining


// console.log(user.address?.city);

//by dynamic value

// console.log(user.address?.[a]);

console.log(user.getFullName?.());