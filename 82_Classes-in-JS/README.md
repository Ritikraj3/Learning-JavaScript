# 🚀 Classes in JavaScript

## 📌 Introduction
In JavaScript, **classes** provide a more structured and cleaner way to create objects compared to constructor functions and prototypes. They were introduced in **ES6 (ECMAScript 2015)** and serve as syntactic sugar over the traditional prototype-based inheritance system.

## 📚 What is a Class?
A **class** in JavaScript is a blueprint for creating objects. It defines properties and methods that objects created from the class will inherit.

### ✅ Key Features of Classes:
- Uses the `class` keyword.
- Contains a `constructor` method for initializing properties.
- Supports **method definitions** inside the class body.
- Uses `new` keyword for creating instances.
- Supports **inheritance** using `extends`.
- Can have **getters and setters**.

---

## 🎯 Defining a Class
A class is defined using the `class` keyword followed by the class name.

### 📌 Example:
```javascript
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }

    getBirthYear() {
        return new Date().getFullYear() - this.age;
    }
}

// Creating instances of User class
const user1 = new User('Ritik', 'Raj', 24);
const user2 = new User('Kirti', 'Raikar', 25);

console.log(user1.getFullName()); // Output: Ritik Raj
console.log(user1.getBirthYear()); // Output: (current year - 24)
```

### 🔍 Explanation:
1. **Constructor (`constructor` method)** initializes properties.
2. **Methods (`getFullName`, `getBirthYear`)** define reusable functionalities.
3. **`new` keyword** is used to create instances.

---

## 🔄 Class vs Constructor Function
| Feature | Classes | Constructor Functions |
|---------|---------|----------------------|
| Syntax | More readable and structured | Traditional function-based |
| `constructor` | Inside `class` body | Defined as a function |
| Prototype Methods | Declared inside class | Defined separately using `prototype` |
| Inheritance | Uses `extends` keyword | Uses `Object.create()` or prototype chaining |

---

## ⚡ Class Inheritance
JavaScript **supports inheritance**, allowing one class to inherit from another using the `extends` keyword.

### 📌 Example:
```javascript
class Admin extends User {
    constructor(firstName, lastName, age, role) {
        super(firstName, lastName, age);
        this.role = role;
    }

    getRole() {
        return `${this.getFullName()} is an ${this.role}`;
    }
}

const admin1 = new Admin('Aryan', 'Sharma', 28, 'Admin');
console.log(admin1.getRole()); // Output: Aryan Sharma is an Admin
```

### 🔍 Explanation:
1. **`extends` keyword** allows `Admin` to inherit from `User`.
2. **`super()` method** calls the parent class constructor.
3. **`Admin` class** has its own method `getRole()`.

---

## 🎭 Getters and Setters in Classes
We can define **getters (`get`)** and **setters (`set`)** for computed properties or validation.

### 📌 Example:
```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value < 0) {
            console.log("Age cannot be negative.");
        } else {
            this._age = value;
        }
    }
}

const person1 = new Person("John", 30);
console.log(person1.age); // Output: 30
person1.age = -5; // Output: Age cannot be negative.
```

### 🔍 Explanation:
1. **`get age()`** acts like a property, returning `_age`.
2. **`set age(value)`** validates the input before assigning.

---

## 🛠 Static Methods and Properties
Static methods belong to the class itself, **not instances**.

### 📌 Example:
```javascript
class MathHelper {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathHelper.add(5, 3)); // Output: 8
```

### 🔍 Explanation:
- **`static` keyword** makes `add()` accessible only via `MathHelper.add()`, not via instances.

---

## ❌ Common Mistakes to Avoid
1. **Forgetting `new` when creating an instance:**
   ```javascript
   const user1 = User("Alice", "Smith", 25); // ❌ Error
   ```
   **Fix:** `const user1 = new User("Alice", "Smith", 25);`

2. **Trying to call `super()` without `extends`:**
   ```javascript
   class Employee {
       constructor(name) {
           super(name); // ❌ Error, no parent class
       }
   }
   ```
   **Fix:** Ensure `extends` is used before calling `super()`.

3. **Defining static methods and trying to call them on instances:**
   ```javascript
   class Test {
       static hello() {
           return "Hello!";
       }
   }
   const obj = new Test();
   console.log(obj.hello()); // ❌ Error: obj.hello is not a function
   ```
   **Fix:** Call it using `Test.hello()` instead of `obj.hello()`.

---

## 🎯 Conclusion
JavaScript **classes** provide a cleaner and more readable way to work with objects compared to constructor functions. They support inheritance, static methods, getters/setters, and follow the OOP paradigm efficiently.

## 🏆 Keep Learning
Want to dive deeper? Explore these related topics:
- **ES6 Classes vs. Traditional Prototypes**
- **Object-Oriented Programming (OOP) in JavaScript**
- **JavaScript Inheritance and the Prototype Chain**

Happy Coding! 🚀

