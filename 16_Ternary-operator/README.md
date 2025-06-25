# Ternary Operator in JavaScript

The **ternary operator** is a shorthand for the `if-else` statement. It is called the ternary operator because it takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false.

## Syntax:
```js
condition ? expressionIfTrue : expressionIfFalse;
```

- **condition**: The condition to evaluate.
- **expressionIfTrue**: The expression to execute if the condition is true.
- **expressionIfFalse**: The expression to execute if the condition is false.

## Example 1: Basic Ternary Operator

```js
let age = 18;
let canVote = (age >= 18) ? 'You can vote.' : 'You cannot vote.';
console.log(canVote);
```

### Explanation:
- The condition `age >= 18` checks if the age is 18 or older.
- If the condition is true, `'You can vote.'` is assigned to `canVote`.
- If the condition is false, `'You cannot vote.'` is assigned to `canVote`.

### Output:
```
You can vote.
```

## Example 2: Ternary Operator in Functions

You can use the ternary operator inside functions for concise return values.

```js
function checkEvenOdd(number) {
    return (number % 2 === 0) ? 'Even' : 'Odd';
}

console.log(checkEvenOdd(10));  // Output: Even
console.log(checkEvenOdd(7));   // Output: Odd
```

### Explanation:
- The condition `number % 2 === 0` checks if the number is divisible by 2.
- If true, `'Even'` is returned; otherwise, `'Odd'` is returned.

## Example 3: Nested Ternary Operator

Ternary operators can be nested for more complex conditions. However, nested ternaries can be hard to read, so use them cautiously.

```js
let score = 85;
let grade = (score >= 90) ? 'A' : (score >= 80) ? 'B' : (score >= 70) ? 'C' : 'F';
console.log(grade);
```

### Explanation:
- If `score >= 90`, the grade is `'A'`.
- If `score` is between 80 and 89, the grade is `'B'`.
- If `score` is between 70 and 79, the grade is `'C'`.
- Otherwise, the grade is `'F'`.

### Output:
```
B
```

## Example 4: Ternary Operator for Conditional Assignment

You can use the ternary operator to assign values based on a condition.

```js
let isLoggedIn = true;
let message = isLoggedIn ? 'Welcome back!' : 'Please log in.';
console.log(message);
```

### Explanation:
- If `isLoggedIn` is `true`, the message is `'Welcome back!'`.
- If `isLoggedIn` is `false`, the message is `'Please log in.'`.

### Output:
```
Welcome back!
```

## Example 5: Ternary Operator vs. if-else Statement

The ternary operator is a concise alternative to the `if-else` statement.

### Using `if-else`:
```js
let age = 20;
let status;

if (age >= 18) {
    status = 'Adult';
} else {
    status = 'Minor';
}
console.log(status);  // Output: Adult
```

### Using the Ternary Operator:
```js
let age = 20;
let status = (age >= 18) ? 'Adult' : 'Minor';
console.log(status);  // Output: Adult
```

Both produce the same result, but the ternary operator version is more concise.

## Example 6: Ternary Operator for JSX (React Example)

The ternary operator is often used in JSX for rendering different UI elements based on a condition.

```js
const isLoggedIn = true;

return (
    <div>
        {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>}
    </div>
);
```

### Explanation:
- If `isLoggedIn` is `true`, the component renders `<h1>Welcome back!</h1>`.
- If `isLoggedIn` is `false`, the component renders `<h1>Please log in.</h1>`.

## Summary

| Operator     | Description                                                        |
|--------------|--------------------------------------------------------------------|
| `condition ? expressionIfTrue : expressionIfFalse` | Shorthand for an `if-else` statement, which evaluates a condition and returns one of two values based on whether the condition is `true` or `false`. |

The ternary operator is a useful tool for concise conditional expressions, but be cautious when nesting them, as they can reduce code readability.


### For more information about Ternary Operator in JavaScript, visit: 
> - [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
> - [YouTube (Recommended)](https://www.youtube.com/watch?v=uO0RRCBsEIY&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=57)