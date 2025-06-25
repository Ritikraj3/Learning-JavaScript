# Default Parameters 

> In JavaScript, **default parameters** allow you to initialize function parameters with default values if no value or `undefined` is passed when invoking the function. This feature makes functions more flexible and reduces the need to check whether parameters are provided.

## How It Works:
When you define a function with default parameters, the default value is assigned only if:
- The argument is `undefined`, or
- The argument is missing (i.e., no value passed during function call).

## Basic Syntax:
```javascript
function functionName(param1 = defaultValue1, param2 = defaultValue2) {
    // Function body
}
```

## Example 1: Greeting with a Default Name
Let’s start with a simple function that greets someone. If the name is not provided, it should default to "Guest".

```javascript
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greet());          // Output: Hello, Guest!
console.log(greet("Alice"));    // Output: Hello, Alice!
```
In this example:
- When no argument is passed to `greet()`, it uses the default value "Guest".
- When the argument `"Alice"` is passed, the function uses it instead of the default value.

## Example 2: Multiplying Two Numbers with a Default Multiplier
Here’s an example where a function multiplies two numbers, but if the multiplier is not provided, it defaults to 1.

```javascript
function multiply(num, multiplier = 1) {
    return num * multiplier;
}

console.log(multiply(5));         // Output: 5 (5 * 1)
console.log(multiply(5, 2));      // Output: 10 (5 * 2)
```
In this case:
- When only one argument `5` is provided, `multiplier` takes the default value `1`.
- When both `5` and `2` are provided, the function uses `2` as the multiplier.

## Example 3: Combining Default Parameters with Other Logic
You can combine default parameters with other logic in the function. For instance, let's create a function that generates a greeting based on a person's name and title.

```javascript
function introduce(name = "John Doe", title = "Mr.") {
    return `${title} ${name}`;
}

console.log(introduce());                  // Output: Mr. John Doe
console.log(introduce("Jane Smith"));      // Output: Mr. Jane Smith
console.log(introduce("Jane Smith", "Dr.")); // Output: Dr. Jane Smith
```
Here:
- If no arguments are passed, the default name `"John Doe"` and default title `"Mr."` are used.
- If only the name is passed, the default title is still used.
- If both name and title are provided, the defaults are overridden.

## Example 4: Passing `undefined` vs. Skipping Parameters
If you pass `undefined` explicitly, JavaScript will use the default value for that parameter. However, if you pass `null` or any other falsy value, it won’t trigger the default.

```javascript
function describeAnimal(animal = "dog", sound = "bark") {
    return `The ${animal} goes "${sound}".`;
}

console.log(describeAnimal());               // Output: The dog goes "bark".
console.log(describeAnimal("cat"));          // Output: The cat goes "bark".
console.log(describeAnimal(undefined, "meow")); // Output: The dog goes "meow".
console.log(describeAnimal(null, "chirp"));  // Output: The null goes "chirp".
```
- In this case, passing `undefined` will still use the default value (`dog`), but passing `null` uses `null` instead of triggering the default value.

## Example 5: Using Functions as Default Parameters
Default values can also be results of functions. This is useful when the default value depends on a computation or external factor.

```javascript
function getDefaultColor() {
    return "blue";
}

function paint(color = getDefaultColor()) {
    return `Painting the wall in ${color} color.`;
}

console.log(paint());              // Output: Painting the wall in blue color.
console.log(paint("red"));          // Output: Painting the wall in red color.
```
- If no argument is passed to `paint()`, the function `getDefaultColor()` is called, and its return value (`"blue"`) becomes the default value.

### Key Benefits:
1. **Simplifies Code**: Without default parameters, you'd need to write additional checks inside the function body to assign default values.
   ```javascript
   function greet(name) {
       name = name || "Guest";
       return `Hello, ${name}!`;
   }
   ```
   With default parameters, this can be written more concisely as:
   ```javascript
   function greet(name = "Guest") {
       return `Hello, ${name}!`;
   }
   ```

2. **Prevents Common Bugs**: It avoids potential bugs when an argument is missing, as the function will have fallback values.

## Important Notes:
- Default parameters only apply when the argument is `undefined` or missing. Passing `null`, `false`, `0`, or `""` will **not** trigger the default value.
- The default parameter can depend on previous parameters. However, they are evaluated from left to right, meaning you can’t refer to later parameters in earlier default values.

### Example: Dependent Default Parameters
```javascript
function createUser(username, isAdmin = false, role = isAdmin ? "admin" : "user") {
    return { username, role };
}

console.log(createUser("john_doe"));           // Output: { username: 'john_doe', role: 'user' }
console.log(createUser("admin_user", true));   // Output: { username: 'admin_user', role: 'admin' }
```

In this example, `role` depends on the value of `isAdmin`, which is set before it in the parameter list. If `isAdmin` is `true`, `role` is `"admin"`, otherwise it defaults to `"user"`.

## Conclusion:
Default parameters in JavaScript provide a clean and efficient way to handle missing arguments without extra checks. They enhance code readability and ensure that functions have sensible fallback values when arguments are not provided.

### Reference 
To know more detail, visit
> [YouTube](https://www.youtube.com/watch?v=r7I1ViZR08o&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=87&pp=iAQB)