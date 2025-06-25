# Comparison Operators in JavaScript

Comparison operators are used to compare two values and return a boolean result (`true` or `false`). JavaScript has several comparison operators, and they are often used in conditional statements.

## 1. Equal (`==`)
The `==` operator checks if two values are equal after performing type coercion. It doesn't check for strict equality (i.e., it converts the types if necessary).

```js
console.log(5 == '5');  // true (because of type coercion)
console.log(5 == 5);    // true
console.log(5 == '6');  // false
```

## 2. Strict Equal (`===`)
The `===` operator checks if two values are **strictly equal**, meaning it checks both the value and the type. No type conversion is done.

```js
console.log(5 === '5');  // false (different types)
console.log(5 === 5);    // true (same value and type)
```

## 3. Not Equal (`!=`)
The `!=` operator checks if two values are not equal after performing type coercion.

```js
console.log(5 != '5');   // false (because of type coercion)
console.log(5 != 6);     // true
```

## 4. Strict Not Equal (`!==`)
The `!==` operator checks if two values are **not strictly equal**, meaning it checks both value and type.

```js
console.log(5 !== '5');  // true (different types)
console.log(5 !== 5);    // false (same value and type)
```

## 5. Greater Than (`>`)
The `>` operator checks if the value on the left is greater than the value on the right.

```js
console.log(10 > 5);  // true
console.log(5 > 10);  // false
```

## 6. Greater Than or Equal (`>=`)
The `>=` operator checks if the value on the left is greater than or equal to the value on the right.

```js
console.log(10 >= 5);  // true
console.log(5 >= 5);   // true
console.log(4 >= 5);   // false
```

## 7. Less Than (`<`)
The `<` operator checks if the value on the left is less than the value on the right.

```js
console.log(5 < 10);  // true
console.log(10 < 5);  // false
```

## 8. Less Than or Equal (`<=`)
The `<=` operator checks if the value on the left is less than or equal to the value on the right.

```js
console.log(5 <= 10);  // true
console.log(5 <= 5);   // true
console.log(10 <= 5);  // false
```

## 9. Example Usage in Conditional Statements

Comparison operators are often used in conditional statements to control the flow of logic:

```js
let age = 18;

if (age >= 18) {
    console.log('You are an adult.');
} else {
    console.log('You are not an adult.');
}
```

## 10. Special Considerations with `==` and `===`

### Type Coercion in `==`
The `==` operator performs type coercion, meaning it tries to convert the values to the same type before comparing. This can sometimes lead to unexpected results.

```js
console.log(false == 0);     // true (type coercion: false is converted to 0)
console.log('' == false);    // true (type coercion: '' is converted to false)
console.log(null == undefined);  // true (both are treated as "no value")
```

### Strict Equality with `===`
The `===` operator avoids these issues by checking both value and type. It’s generally recommended to use `===` for comparisons to avoid unintended type coercion.

```js
console.log(false === 0);    // false (no type coercion)
console.log('' === false);   // false (no type coercion)
console.log(null === undefined);  // false (different types)
```

## 11. Comparing Objects, Arrays, and Functions

When comparing non-primitive values (like objects, arrays, or functions), the `==` and `===` operators compare references, not the actual values.

```js
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(arr1 === arr2);  // false (different references)

let obj1 = { name: 'Alice' };
let obj2 = obj1;
console.log(obj1 === obj2);  // true (same reference)
```

## Summary of Comparison Operators

| Operator | Description                  | Example         |
|----------|------------------------------|-----------------|
| `==`     | Equal                         | `5 == '5'` (true) |
| `===`    | Strict equal                  | `5 === '5'` (false) |
| `!=`     | Not equal                     | `5 != '5'` (false) |
| `!==`    | Strict not equal              | `5 !== '5'` (true) |
| `>`      | Greater than                  | `10 > 5` (true) |
| `>=`     | Greater than or equal         | `5 >= 5` (true) |
| `<`      | Less than                     | `5 < 10` (true) |
| `<=`     | Less than or equal            | `5 <= 5` (true) |

For more information about Operators in JavaScript, visit: 
> - [MDN Web Docs](https://www.w3schools.com/js/js_comparisons.asp)
> - [W3Schools](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators)
> - [YouTube (Recommended)](https://www.youtube.com/watch?v=HVhD13U5Bh0&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=51&pp=iAQB)