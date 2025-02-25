//JS automatically let object create key value pair when parameter is same passed
  function createUser(firstName, lastName, age) {
    const user = {
        firstName, 
        lastName,
        age,
        getAgeYear() {
            return new Date().getFullYear() - user.age
          }
    }
    return user
  }

  const user1 = createUser ('Ritik' , 'Raj' , 24)
  const user2 = createUser ('kirti' , 'Raikar' , 24)
