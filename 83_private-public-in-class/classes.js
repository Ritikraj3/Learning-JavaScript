class CreateUser {
    #age
    
    constructor (firstName , lastName , age) {
        this.firstName = firstName
        this.lastName = lastName
        this.#age = age                // truly private property
    }

    #h1 = "Hello World"

    getBirthYear () {
        console.log(this.#h1);
        console.log(this.#getFullName());
        return new Date().getFullYear() - this.age
    }

    #getFullName () {
        return this.firstName + ' ' +  this.lastName
    }

}



const user1 = new CreateUser ('Ritik' , 'Raj' , 24)
const user2 = new CreateUser ('Kirti' , 'Raikar' , 25)



const a = {
    name : "Ritik Raj",           
     
    '#age' : 24           //this is not truly private property coz it can accessed with []

}
