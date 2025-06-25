# Loops in JavaScript

Loops allow repeating blocks of code based on a condition. JavaScript supports different types of loops.

## 1. `for` Loop

Used to execute a block of code a specific number of times.

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

## 2. `while` Loop

Executes as long as the condition is `true`.

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

## 3. `do...while` Loop

Executes the code **at least once**, then checks the condition.

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

## 4. `for...in` Loop

Used to iterate over the properties of an object.

```js
let person = { name: "John", age: 25 };
for (let key in person) {
  console.log(key + ": " + person[key]);
}
```

## 5. `for...of` Loop

Iterates over **iterable objects** (arrays, strings, etc.).

```js
let arr = [1, 2, 3];
for (let value of arr) {
  console.log(value);
}
```

## Summary

Loops are fundamental in programming for automating repetitive tasks, making them key in efficient code execution.

### For more information , visit: 
> - [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
> - [W3School](https://www.w3schools.com/js/js_loop_for.asp)
> - [YouTube](https://www.youtube.com/watch?v=jsttBfsjIWc&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=67)