const colors = ['red', 'green', 'yellow', 'pink', 'black', 'white']

// const colors1 = color[0]
// const colors2 = color[1]
// const colors3 = color[2]

// const [color1, color2, color3] = colors

// const [, , color3] = colors
const {3: color4, 5: color5} = colors


const user = {
    name: 'Ritik',
    age: 25,
    address: {
        city: 'Bangalore',
        state: 'Karnataka'
    }
}

// const name = user.name
// const age = user.age

const { name, age, } = user
// const {name: username, age: userAge,  } = user

const { address: {city} } = user

// const { address } = user
// const { city } = address


function intro(age, name) {
    console.log(age, name);
}

intro(user)


function printColors([a, b,,,e]) {
    console.log(a, b, e);
}

printColors(colors)
