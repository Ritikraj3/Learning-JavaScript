# 🚀 Classes in JavaScript

## 📌 Introduction
JavaScript **classes** provide a more structured way to create objects and manage inheritance. They were introduced in **ES6 (ECMAScript 2015)** and act as syntactic sugar over constructor functions and prototypes, making object-oriented programming in JavaScript more readable and maintainable.

## 📚 What is a Class?
A **class** in JavaScript is a blueprint for creating objects. It defines properties and methods that all instances of the class share.

### ✅ Example of a JavaScript Class
```javascript
class CreateUser {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getBirthYear() {
        return new Date().getFullYear() - this.age;
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

const user1 = new CreateUser('Ritik', 'Raj', 24);
const user2 = new CreateUser('Kirti', 'Raikar', 25);

console.log(user1.getFullName()); // Output: Ritik Raj
console.log(user1.getBirthYear()); // Output: (current year - 24)
```

## 🛠 Understanding the Class Components

### 1️⃣ **Constructor Method**
The `constructor` method is a special method that is executed automatically when a new instance of the class is created. It initializes the properties of the object.
```javascript
constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
```

### 2️⃣ **Methods in a Class**
Unlike constructor functions, methods inside a class are automatically added to the class’s prototype, making them memory-efficient.

- **Instance Methods:** Defined inside the class and available to each instance.
```javascript
getBirthYear() {
    return new Date().getFullYear() - this.age;
}
```

```javascript
getFullName() {
    return this.firstName + ' ' + this.lastName;
}
```

## 🎭 Creating Instances of a Class
You can create multiple instances of a class using the `new` keyword:
```javascript
const user1 = new CreateUser('Ritik', 'Raj', 24);
const user2 = new CreateUser('Kirti', 'Raikar', 25);
```
Each instance will have its own set of properties but share the methods defined in the class.

## 🔄 Class vs. Constructor Functions
| Feature | Class | Constructor Function |
|---------|-------|----------------------|
| Syntax | More structured | Less structured |
| Method Storage | Methods are on prototype | Methods must be manually added to prototype |
| Readability | More readable | Less readable |
| `extends` Keyword | Supports easy inheritance | Requires manual prototype chaining |

## 🌟 Inheritance in Classes
One of the major benefits of using classes is **inheritance**, which allows one class to inherit properties and methods from another.

### ✅ Example:
```javascript
class AdminUser extends CreateUser {
    constructor(firstName, lastName, age, role) {
        super(firstName, lastName, age);
        this.role = role;
    }

    getRole() {
        return `${this.getFullName()} is an ${this.role}`;
    }
}

const admin = new AdminUser('Ritik', 'Raj', 24, 'Administrator');
console.log(admin.getRole()); // Output: Ritik Raj is an Administrator
```
### 🔥 Explanation:
- `extends` allows `AdminUser` to inherit from `CreateUser`.
- `super(...)` calls the parent class constructor to initialize properties.

## ❌ Common Mistakes to Avoid
1. **Forgetting the `new` keyword**
   ```javascript
   const user3 = CreateUser('Jane', 'Doe', 30); // ❌ Error: Class constructor cannot be invoked without 'new'
   ```
   **Fix:** Use `new CreateUser('Jane', 'Doe', 30);`

2. **Trying to reassign a method directly inside an instance**
   ```javascript
   user1.getBirthYear = function() { return 2000; }; // ❌ Overrides only for this instance
   ```
   **Fix:** Define methods inside the class.

## 🎯 Conclusion
JavaScript classes provide a cleaner and more structured way to create objects, handle methods, and manage inheritance. If you're coming from an object-oriented programming background, classes make JavaScript easier to understand and work with.

## 🏆 Keep Learning
Want to explore more?
- **Prototypes in JavaScript** – Understand how JavaScript handles inheritance.
- **Factory Functions vs. Classes** – Learn different ways to create objects.
- **ES6+ Features** – Explore new JavaScript features for better development.

Happy Coding! 🚀

