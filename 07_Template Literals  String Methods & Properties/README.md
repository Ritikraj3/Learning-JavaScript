
# Template Literals, String Methods, and Properties in JavaScript

## Template Literals
Template literals provide an easier and more readable way to work with strings in JavaScript. They use backticks (`` ` ``) instead of quotes and support features like variable interpolation and multi-line strings.

### Syntax:
```javascript
const name = 'Ritik';
const message = `Hello, my name is ${name}.`;
console.log(message);
```
**Output:** `Hello, my name is Ritik.`

### Key Features:
1. **Interpolation:**
   Embed expressions inside strings using `${expression}`.
   ```javascript
   const total = 100;
   const discount = 20;
   console.log(`Total amount after discount: ₹${total - discount}`);
   ```

2. **Multi-line Strings:**
   ```javascript
   const multiline = `This is
a multi-line
string.`;
   console.log(multiline);
   ```

---

## String Methods and Properties
Strings in JavaScript are immutable and come with various methods and one key property:

### String Property
- **`length`:** Returns the number of characters in a string.
  ```javascript
  const str = 'Hello';
  console.log(str.length); // 5
  ```

### String Methods
#### Methods Without Arguments
1. **`toUpperCase()`:** Converts the string to uppercase.
   ```javascript
   console.log('hello'.toUpperCase()); // 'HELLO'
   ```
2. **`toLowerCase()`:** Converts the string to lowercase.
   ```javascript
   console.log('HELLO'.toLowerCase()); // 'hello'
   ```
3. **`trim()`:** Removes whitespace from both ends of a string.
   ```javascript
   const str = '  Hello  ';
   console.log(str.trim()); // 'Hello'
   ```
4. **`trimStart()` / `trimEnd()`:** Removes whitespace from the start or end, respectively.

#### Methods With Arguments
1. **`includes(substring)`:** Checks if a substring exists within a string.
   ```javascript
   console.log('Hello World'.includes('World')); // true
   ```
2. **`indexOf(substring)`:** Returns the index of the first occurrence of a substring.
   ```javascript
   console.log('Hello'.indexOf('l')); // 2
   ```
3. **`replace(searchValue, newValue)`:** Replaces the first occurrence of `searchValue` with `newValue`.
   ```javascript
   console.log('Hello World'.replace('World', 'JavaScript')); // 'Hello JavaScript'
   ```
4. **`replaceAll(searchValue, newValue)`:** Replaces all occurrences of `searchValue` with `newValue`.
   ```javascript
   console.log('a,b,c'.replaceAll(',', ';')); // 'a;b;c'
   ```
5. **`concat(...strings)`:** Concatenates strings.
   ```javascript
   console.log('Hello'.concat(' ', 'World')); // 'Hello World'
   ```
6. **`padStart(targetLength, padString)`:** Pads the beginning of a string to the specified length.
   ```javascript
   console.log('123'.padStart(5, '0')); // '00123'
   ```
7. **`padEnd(targetLength, padString)`:** Pads the end of a string to the specified length.
   ```javascript
   console.log('123'.padEnd(5, '*')); // '123**'
   ```
8. **`charAt(index)`:** Returns the character at the specified index.
   ```javascript
   console.log('Hello'.charAt(1)); // 'e'
   ```
9. **`charCodeAt(index)`:** Returns the Unicode of the character at the specified index.
   ```javascript
   console.log('Hello'.charCodeAt(1)); // 101
   ```
10. **`split(separator)`:** Splits the string into an array based on a separator.
    ```javascript
    console.log('a,b,c'.split(',')); // ['a', 'b', 'c']
    ```

---

### Example from My Code
```javascript
const message = 'Hello World!';
const faltuMessage = '  hy my name is ritik   ';
const finalMessageUppercase = faltuMessage.trim().toUpperCase();
const finalMessage = faltuMessage.trim();
const lastFourDigits = '7856';
const bankBalance = 9855;    
const maskedAccountNumber = lastFourDigits.padStart(16,'*');
const concatenatedString = `Last four digits of my account number is`.concat(' ', lastFourDigits);
const templateString = `My account number is ${lastFourDigits.padStart(16,'*')}`;
const templateString2 = `My total amount is ₹${bankBalance}.`;
```

---

Use this document to quickly review Template Literals, String Methods, and Properties in JavaScript, as well as practical examples for reference.



## Interview Questions and Answers

### Template Literals
1. **What are template literals? How are they different from regular strings?**
   - Template literals are strings enclosed in backticks (`` ` ``) that allow embedded expressions using `${}`.
   - Unlike regular strings, they support multi-line strings and string interpolation.

2. **How can you create multi-line strings using template literals?**
   - By using backticks:
     ```javascript
     const multiline = `This is
a multi-line string.
     console.log(multiline);
     

3. **What are some practical uses of template literals?**
   - Embedding variables into strings.
   - Creating multi-line strings.
   - Formatting numbers and currency values.

### String Methods
4. **How does the `trim()` method work?**
   - Removes whitespace from both ends of a string.
     ```javascript
     const str = '  Hello  ';
     console.log(str.trim()); // 'Hello'
     ```

5. **What is the difference between `replace()` and `replaceAll()`?**
   - `replace()` replaces the first occurrence of a substring.
   - `replaceAll()` replaces all occurrences of a substring.

6. **Explain the use of `padStart()` and `padEnd()`.**
   - `padStart(targetLength, padString)` pads the beginning of a string to the specified length.
   - `padEnd(targetLength, padString)` pads the end of a string.

7. **How does the `split()` method work?**
   - Splits a string into an array based on a specified separator.
     ```javascript
     console.log('a,b,c'.split(',')); // ['a', 'b', 'c']
     ```

8. **What is the output of the following code?**
   ```javascript
   const str = 'JavaScript';
   console.log(str.charAt(4));
   console.log(str.charCodeAt(4));
   ```
   - Output:
     ```
     S
     83
     ```

9. **What does the `length` property of a string return?**
   - The number of characters in the string (including spaces).

---

Use this document to prepare for interviews on Template Literals, String Methods, and Properties in JavaScript.

