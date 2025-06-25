# Switch Case in JavaScript

The `switch` statement is used to execute one of many blocks of code based on the value of an expression. It compares the expression's value with different `case` values and executes the code block corresponding to the matching case. If no case matches, the `default` case is executed (if provided).

## Syntax:
```js
switch (expression) {
    case value1:
        // Code to execute if expression === value1
        break;
    case value2:
        // Code to execute if expression === value2
        break;
    default:
        // Code to execute if none of the cases match
}
```

### Important Points:
- Each `case` is followed by the value to compare and a colon (`:`).
- The `break` statement is used to exit the switch block. Without `break`, the program will continue to execute the next case even if a match is found (known as "fall-through").
- The `default` case is optional and is executed if no matching case is found.

## Example 1: Basic Switch Case

```js
let day = 2;

switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    default:
        console.log('Unknown day');
}
```

### Explanation:
- The value of `day` is compared with each `case`.
- Since `day` is 2, it matches the second case, and `'Tuesday'` is logged to the console.
- The `break` statement ensures that the execution stops after the matching case.

### Output:
```
Tuesday
```

## Example 2: Switch with `default` Case

```js
let fruit = 'apple';

switch (fruit) {
    case 'banana':
        console.log('Banana is yellow.');
        break;
    case 'apple':
        console.log('Apple is red.');
        break;
    case 'orange':
        console.log('Orange is orange.');
        break;
    default:
        console.log('Unknown fruit');
}
```

### Explanation:
- The value of `fruit` is compared with each `case`.
- Since `fruit` is `'apple'`, the second case matches, and `'Apple is red.'` is logged to the console.

### Output:
```
Apple is red.
```

### Output when `fruit = 'grape'`:
```
Unknown fruit
```
(In this case, none of the cases match, so the `default` case is executed.)

## Example 3: Switch Case without `break` (Fall-through)

If the `break` statement is omitted, JavaScript will execute the code for all subsequent cases after a match (fall-through behavior).

```js
let score = 85;

switch (true) {
    case score >= 90:
        console.log('Grade A');
        break;
    case score >= 80:
        console.log('Grade B');
    case score >= 70:
        console.log('Grade C');
        break;
    default:
        console.log('No Grade');
}
```

### Explanation:
- In this example, `score` is 85, so the second case (`score >= 80`) matches.
- However, since there is no `break` after the `Grade B` case, it falls through to the next case, and both `'Grade B'` and `'Grade C'` are logged.

### Output:
```
Grade B
Grade C
```

To prevent this, always use `break` after each case unless intentional fall-through is desired.

## Example 4: Grouping Cases

You can group multiple cases together if they should execute the same code block.

```js
let color = 'blue';

switch (color) {
    case 'red':
    case 'blue':
    case 'green':
        console.log('Primary color');
        break;
    case 'yellow':
    case 'orange':
        console.log('Secondary color');
        break;
    default:
        console.log('Unknown color');
}
```

### Explanation:
- In this example, if `color` is `'red'`, `'blue'`, or `'green'`, the message `'Primary color'` will be logged.
- If `color` is `'yellow'` or `'orange'`, the message `'Secondary color'` will be logged.

### Output when `color = 'blue'`:
```
Primary color
```

### Output when `color = 'orange'`:
```
Secondary color
```

## Example 5: Switch with Complex Conditions

You can use a `switch` with boolean conditions by combining it with `true` as the expression.

```js
let age = 20;

switch (true) {
    case age >= 18 && age <= 25:
        console.log('You are a young adult.');
        break;
    case age > 25 && age <= 60:
        console.log('You are an adult.');
        break;
    default:
        console.log('Age not categorized.');
}
```

### Explanation:
- In this case, `true` is used as the expression, and each `case` is a conditional expression.
- Since `age` is 20, the first case matches, and `'You are a young adult.'` is logged.

### Output:
```
You are a young adult.
```

## Summary of Switch Case in JavaScript

| Keyword    | Description                                                            |
|------------|------------------------------------------------------------------------|
| `switch`   | Evaluates an expression and compares it against multiple `case` values |
| `case`     | Defines a block of code to execute if the expression matches           |
| `break`    | Exits the switch block after executing the matching case               |
| `default`  | Executes if no case matches the expression                             |

Switch cases are useful for decision-making when you need to compare the same variable to multiple values, especially for clear and structured comparisons.

### For more information about Switch case in JavaScript, visit: 
> - [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
> - [W3Schools](https://www.w3schools.com/js/js_if_else.asp)
> - [YouTube (Recommended)](https://www.youtube.com/watch?v=ebJVbq6BDFI&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=56)