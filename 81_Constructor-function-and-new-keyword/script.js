//JS automatically let object create key value pair when parameter is same passed



// function createUser(firstName, lastName, age) {
//     const user = {
//         firstName, 
//         lastName,
//         age,
//         // getBirthYear: createUser.commonMethods.getBirthYear,
//     }
//     return user
//   }

//   createUser.commonMethods = {
//     getBirthYear () {
//     return new Date().getFullYear() - this.age
//   }
// }


function createUser(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }

createUser.prototype.getBirthYear = function () {
        return new Date().getFullYear() - this.age
}

createUser.prototype.getFullName = function () {
        return this.firstName + ' ' +  this.lastName
}


  const user1 = new createUser ('Ritik' , 'Raj' , 24)
  const user2 = new createUser ('Kirti' , 'Raikar' , 25)


