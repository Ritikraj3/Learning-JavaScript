# Returning Functions with Closures in JavaScript

## 1. Closures in JavaScript

A **closure** in JavaScript is when a function "remembers" the variables from its surrounding lexical scope even after the outer function has completed execution. Closures are often used when an inner function is returned from an outer function.

### Example:
```js
function outerFunction(outerVar) {
  return function innerFunction(innerVar) {
    console.log(`Outer Variable: ${outerVar}`);
    console.log(`Inner Variable: ${innerVar}`);
  };
}

const newFunc = outerFunction("Hello");
newFunc("World");
```

#### Explanation:
- The outer function, `outerFunction`, returns an inner function.
- Even after `outerFunction` finishes execution, the returned `innerFunction` retains access to `outerVar` due to the closure.
  
#### Output:
```
Outer Variable: Hello
Inner Variable: World
```

Closures are powerful because they allow access to the outer function's scope even after the outer function has completed, which is key for functions that need to maintain state or context over time.

## 2. Practical Uses of Closures

Closures have many practical uses in JavaScript. Common use cases include **function factories**, **private variables**, and **callback functions**.

### 2.1 Function Factories

You can use closures to create functions that are customized based on the arguments passed to an outer function.

#### Example:
```js
function multiplier(factor) {
  return function(num) {
    return num * factor;
  };
}

const multiplyByTwo = multiplier(2);
console.log(multiplyByTwo(5)); // 10
```

In this example, `multiplier` creates a function that multiplies any given number by the `factor` provided when it was created. The inner function retains access to the `factor` variable, thanks to the closure.

### 2.2 Private Variables

Closures are often used to **create private variables** that cannot be accessed directly from outside the function.

#### Example:
```js
function counter() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  };
}

const increment = counter();
increment(); // 1
increment(); // 2
```

Here, the `count` variable is only accessible through the inner function. This makes `count` a **private variable**, which cannot be accessed or modified directly from the outside.

## 3. Advanced Example with Closures

Closures can also be used in more complex scenarios, such as in event handlers or asynchronous code.

### Example with Asynchronous Code:
```js
function delayedMessage(message, delay) {
  return function() {
    setTimeout(() => {
      console.log(message);
    }, delay);
  };
}

const showHello = delayedMessage("Hello, World!", 2000);
showHello(); // Prints "Hello, World!" after 2 seconds
```

In this case, the closure allows the `message` variable to persist even after `delayedMessage` has finished executing. When `setTimeout` executes after 2 seconds, it still has access to the `message` due to the closure.

## 4. Key Points

- A **closure** is created when a function retains access to its lexical scope, even after the outer function has finished execution.
- Closures are commonly used for maintaining state, creating function factories, and making private variables.
- **Function Factories**: Closures allow you to return customized functions.
- **Private Variables**: Variables in the outer function are only accessible through the inner function, creating data privacy.
- Closures are often used in **asynchronous** programming, especially in callback functions.

For more information about SetTimeout and SetInterval in JavaScript, visit: 
> - [MDN (recommended)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
> - [GeeksForGeek](https://www.geeksforgeeks.org/closure-in-javascript/)
> - [W3School](https://www.w3schools.com/js/js_function_closures.asp)
> - [YouTube (HOF with closure)](https://www.youtube.com/watch?v=w_-fVsa6qns&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=82)
> - [YouTube (recommended)](https://www.youtube.com/watch?v=d4_hcQkGkfI)

## Other related topics
- [HOF](./HOF-2.md)
- [Immediately invoked vs Returning function](./immediately-invoked-VS-returning-function.md)