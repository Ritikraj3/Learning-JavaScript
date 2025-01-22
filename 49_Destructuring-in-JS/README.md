

---

# Destructuring in JavaScript

## Overview
Destructuring is a feature in JavaScript introduced with ES6 that allows you to extract values from arrays or properties from objects and assign them to variables in a single statement. This simplifies code and enhances readability.

---

## Array Destructuring

### Basic Usage
Array destructuring lets you unpack values from an array into distinct variables:
```javascript
const colors = ['red', 'green', 'yellow', 'pink', 'black', 'white'];
const [color1, color2, color3] = colors; // 'red', 'green', 'yellow'
```

### Skipping Elements
You can skip elements by leaving placeholders:
```javascript
const [, , color3] = colors; // 'yellow'
```

### Object-like Syntax with Arrays
Array destructuring can use object syntax by treating indices as keys:
```javascript
const { 3: color4, 5: color5 } = colors; // 'pink', 'white'
```

---

## Object Destructuring

### Basic Usage
Extracting properties from an object:
```javascript
const user = {
    name: 'Ritik',
    age: 25,
    address: {
        city: 'Bangalore',
        state: 'Karnataka',
    },
};
const { name, age } = user; // 'Ritik', 25
```

### Nested Destructuring
You can destructure nested objects:
```javascript
const { address: { city } } = user; // 'Bangalore'
```

### Aliases
Assign a new variable name using aliases:
```javascript
const { name: userName, age: userAge } = user;
```

---

## Destructuring in Functions

### Function Parameters
You can destructure directly within function parameters:
```javascript
function intro({ name, age }) {
    console.log(name, age);
}
intro(user); // 'Ritik', 25
```

### Using Arrays
Function parameters can also destructure arrays:
```javascript
function printColors([a, b, , , e]) {
    console.log(a, b, e); // 'red', 'green', 'black'
}
printColors(colors);
```

---

## Benefits of Destructuring
- **Simplifies code**: Extract multiple values in a single statement.
- **Improves readability**: Makes it clear what is being extracted.
- **Avoids repetition**: No need to access properties multiple times.

---

