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


function CreateUser(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }

CreateUser.prototype.getBirthYear = function () {
        return new Date().getFullYear() - this.age
}

CreateUser.prototype.getFullName = function () {
        return this.firstName + ' ' +  this.lastName
}


  const user1 = new CreateUser ('Ritik' , 'Raj' , 24)
  const user2 = new CreateUser ('Kirti' , 'Raikar' , 25)


