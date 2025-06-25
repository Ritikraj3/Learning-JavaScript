# Logical Operators in JavaScript

Logical operators in JavaScript are used to combine multiple conditions or expressions and return a boolean result. There are three main logical operators: `&&` (AND), `||` (OR), and `!` (NOT).

## 1. Logical AND (`&&`)

The logical AND operator (`&&`) returns `true` if **both** operands are true. If any operand is `false`, it returns `false`.

```js
let a = true;
let b = false;

console.log(a && b);  // false (since b is false)
console.log(a && true);  // true (since both a and true are true)
```

### Short-Circuiting with AND (`&&`)
If the first condition is `false`, JavaScript skips evaluating the second condition.

```js
let x = 5;
console.log(x > 10 && x < 20);  // false (first condition is false, so second is not evaluated)
```

## 2. Logical OR (`||`)

The logical OR operator (`||`) returns `true` if **either** of the operands is true. It only returns `false` if both operands are `false`.

```js
let a = true;
let b = false;

console.log(a || b);  // true (since a is true)
console.log(b || false);  // false (since both are false)
```

### Short-Circuiting with OR (`||`)
If the first condition is `true`, JavaScript skips evaluating the second condition.

```js
let y = 5;
console.log(y > 3 || y < 2);  // true (first condition is true, so second is not evaluated)
```

## 3. Logical NOT (`!`)

The logical NOT operator (`!`) inverts the boolean value of its operand. If the operand is `true`, `!` converts it to `false` and vice versa.

```js
let a = true;
let b = false;

console.log(!a);  // false (since a is true, !a becomes false)
console.log(!b);  // true (since b is false, !b becomes true)
```

## 4. Combining Logical Operators

You can combine logical operators to create complex conditions:

```js
let age = 25;
let hasID = true;

if (age >= 18 && hasID) {
    console.log('Access granted.');
} else {
    console.log('Access denied.');
}
```

In this example:
- The condition checks if `age` is greater than or equal to 18 **and** if `hasID` is true.
- If both conditions are true, the user gets access.

## 5. Falsy and Truthy with Logical Operators

Logical operators can also work with non-boolean values. In such cases:
- `&&` returns the first falsy value or the last value if none are falsy.
- `||` returns the first truthy value or the last value if none are truthy.

### Example with `&&`:
```js
console.log(null && 'hello');  // null (because null is falsy)
console.log(42 && 'hello');    // 'hello' (because 42 is truthy, so the second value is returned)
```

### Example with `||`:
```js
console.log(null || 'hello');  // 'hello' (because null is falsy, so the second value is returned)
console.log(42 || 'hello');    // 42 (because 42 is truthy)
```

## 6. Logical Nullish Assignment (`??`)

The nullish coalescing operator (`??`) returns the right-hand operand when the left-hand operand is `null` or `undefined`, otherwise it returns the left-hand operand.

```js
let foo = null ?? 'default';
console.log(foo);  // 'default'

let bar = 0 ?? 'default';
console.log(bar);  // 0 (because 0 is not null or undefined)
```

## 7. Logical Assignment Operators

JavaScript also provides logical assignment operators to combine logical operations with assignment.

### Example of Logical AND assignment (`&&=`):
```js
let a = true;
let b = false;

a &&= b;
console.log(a);  // false (because a is true, so it's assigned the value of b)
```

### Example of Logical OR assignment (`||=`):
```js
let a = false;
let b = true;

a ||= b;
console.log(a);  // true (because a is false, it's assigned the value of b)
```

### Example of Nullish assignment (`??=`):
```js
let a = null;
let b = 42;

a ??= b;
console.log(a);  // 42 (because a is null, it's assigned the value of b)
```

## Summary of Logical Operators

| Operator | Name        | Description                                                      | Example                   |
|----------|-------------|------------------------------------------------------------------|---------------------------|
| `&&`     | Logical AND | Returns true if **both** operands are true                       | `true && false` (false)    |
| `\|\|`   | Logical OR  | Returns true if **either** operand is true                       | `true \|\| false` (true)   |
| `!`      | Logical NOT | Inverts the boolean value                                        | `!true` (false)            |
| `??`     | Nullish     | Returns right-hand value if left-hand value is `null`/`undefined`| `null ?? 'hello'` (hello)  |



For more information about Operators in JavaScript, visit: 
> - [MDN Web Docs](https://www.w3schools.com/js/js_comparisons.asp)
> - [W3Schools](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators)
> - [YouTube (Recommended)](https://www.youtube.com/watch?v=hjSSoCRU_nc&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=52&pp=iAQB)