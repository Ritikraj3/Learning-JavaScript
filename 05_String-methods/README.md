# Strings in JavaScript

A **string** in JavaScript is a sequence of characters used to represent text. Strings can be created using single quotes (`'`), double quotes (`"`), or backticks (`` ` ``) for template literals.

```js
let str1 = 'Hello';
let str2 = "World";
let str3 = `Template literal example`;
```

## 1. Properties of Strings

### 1.1 `length`
The `length` property returns the number of characters in a string.

```js
let message = 'Hello, World!';
console.log(message.length);  // 13
```

## 2. Methods of Strings

### 2.1 `charAt(index)`
The `charAt()` method returns the character at a specified index in the string. The index is zero-based.

```js
let str = 'Hello';
console.log(str.charAt(1));  // 'e'
```

### 2.2 `concat()`
The `concat()` method is used to join two or more strings.

```js
let str1 = 'Hello';
let str2 = 'World';
console.log(str1.concat(' ', str2));  // 'Hello World'
```

### 2.3 `includes(substring)`
The `includes()` method checks if a string contains a specified substring. It returns `true` if found, otherwise `false`.

```js
let sentence = 'JavaScript is awesome';
console.log(sentence.includes('awesome'));  // true
console.log(sentence.includes('bad'));      // false
```

### 2.4 `indexOf(substring)`
The `indexOf()` method returns the index of the first occurrence of a specified substring. If not found, it returns `-1`.

```js
let phrase = 'Hello, World!';
console.log(phrase.indexOf('World'));  // 7
console.log(phrase.indexOf('Java'));   // -1
```

### 2.5 `slice(startIndex, endIndex)`
The `slice()` method extracts a section of a string and returns it as a new string, without modifying the original string. The `endIndex` is optional and non-inclusive.

```js
let text = 'JavaScript';
console.log(text.slice(0, 4));   // 'Java'
console.log(text.slice(4));      // 'Script'
```

### 2.6 `toUpperCase()`
The `toUpperCase()` method converts the entire string to uppercase.

```js
let lowerCaseStr = 'hello';
console.log(lowerCaseStr.toUpperCase());  // 'HELLO'
```

### 2.7 `toLowerCase()`
The `toLowerCase()` method converts the entire string to lowercase.

```js
let upperCaseStr = 'HELLO';
console.log(upperCaseStr.toLowerCase());  // 'hello'
```

### 2.8 `trim()`
The `trim()` method removes whitespace from both ends of a string.

```js
let strWithSpaces = '   Hello, World!   ';
console.log(strWithSpaces.trim());  // 'Hello, World!'
```

### 2.9 `split(separator)`
The `split()` method splits a string into an array of substrings based on the specified separator.

```js
let sentence = 'JavaScript is awesome';
let words = sentence.split(' ');
console.log(words);  // ['JavaScript', 'is', 'awesome']
```

### 2.10 `replace(searchValue, newValue)`
The `replace()` method replaces the first occurrence of a specified value in a string with a new value.

```js
let greeting = 'Hello, World!';
let newGreeting = greeting.replace('World', 'JavaScript');
console.log(newGreeting);  // 'Hello, JavaScript!'
```

### 2.11 `repeat(count)`
The `repeat()` method returns a new string with the original string repeated the specified number of times.

```js
let repeatStr = 'Ha!';
console.log(repeatStr.repeat(3));  // 'Ha!Ha!Ha!'
```

### 2.12 `startsWith(prefix)`
The `startsWith()` method checks if a string starts with a specified prefix.

```js
let text = 'JavaScript is cool';
console.log(text.startsWith('Java'));   // true
console.log(text.startsWith('cool'));   // false
```

### 2.13 `endsWith(suffix)`
The `endsWith()` method checks if a string ends with a specified suffix.

```js
let text = 'JavaScript is cool';
console.log(text.endsWith('cool'));   // true
console.log(text.endsWith('Java'));   // false
```

## 3. String Immutability

Strings in JavaScript are **immutable**, meaning once a string is created, its value cannot be changed. Instead, you create a new string with the desired modifications.

```js
let str = 'Hello';
str[0] = 'h';   // This will not change the string
console.log(str);  // 'Hello'
```

## 4. Template Literals (ES6)

Template literals (enclosed by backticks) allow embedding variables and expressions into strings using `${}`.

```js
let name = 'Alice';
let age = 25;
let message = `My name is ${name} and I am ${age} years old.`;
console.log(message);  // 'My name is Alice and I am 25 years old.'
```

Template literals also support multi-line strings:

```js
let multilineStr = `This is a string
that spans across
multiple lines.`;
console.log(multilineStr);
```

## 5. Escape Characters

You can use escape characters (like `\\`, `\'`, `\"`, and `\n`) to insert special characters into strings.

```js
let quote = 'He said, "JavaScript is awesome!"';
let escapedStr = 'This is a backslash: \\';
```

## recap of what i have learned about String
```js
const name = "shiv"
const repoCount = 50

//another way to declare string
const gameName = new String('shiv-gc')
/*
first method only define variable and store string
while second method store its information also
==see refrence image

now you can easily perform operations on 
'gameName'
*/
console.log(gameName); //it wont print string name
// see output  [String: 'shivgc']
console.log(gameName[0]); //s
//https://youtu.be/fozwNnFunlo?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&t=430
console.log(gameName.__proto__); // its prototype // output is an object {}

console.log(gameName.length);  //7
console.log(gameName.toUpperCase());  //SHIV-GC
console.log(gameName.charAt(2));  //i
console.log(gameName.indexOf("t")); //-1
console.log(gameName.indexOf("v")); //3

const newString=gameName.substring(0,2) // here you can only give +ve arg
console.log(newString); //sh

const anotherString = gameName.slice(-5,5) //here you can give -ve arg also
console.log(anotherString);  //iv-

const newStringOne="    shiv    "
console.log(newStringOne);  //    shiv 
console.log(newStringOne.trim());  //removes backspace

const url="https://shiv.com/shiv%20shingh"
// u want to replace 
console.log(url.replace('%20','_'));  //https://shiv.com/shiv_shingh
console.log(url.includes('shiv'));  //true
// to check if paramtr is presend or not
console.log(gameName.split('-'));  //[ 'shiv', 'gc' ]


console.log(name + repoCount + "value"); //shiv50value
/*
we are normally concatinating using ++
this line doesnt look good in prduct buildup perspective
ie its not much readable and to make it more readable, we will use
string interpolation.
and from now on we will be always using same method
*/

console.log(`hello my name is ${gameName} and my repo count is ${repoCount}`);
//output: hello my name is shiv-gc and my repo count is 50

/*
here we are using backtick(`) and placeholders(using ${}) while 
writing desired content alongside
this look more readable and industry friendly
*/


/*-------OUTPUT
[String: 'shiv-gc']
s
{}
7
SHIVGC
shiv50value
hello my name is shivgc and my repo count is 50
*/

/* additionla knowledge:
template strings: use backticks(``) rather than quotes(""), 
1. backtick allow both single and double quotes inside string
2. also allow multiline strings, and interpolations(${}),
        let firstName = "John";
        let lastName = "Doe";

        let text = `Welcome ${firstName}, ${lastName}!`;

3. expressions in string:
    let price = 10;
    let VAT = 0.25;

    let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

4. HTML template:
    let header = "Template Strings";
    let tags = ["template strings", "javascript", "es6"];

    let html = `<h2>${header}</h2><ul>`;
    for (const x of tags) {
    html += `<li>${x}</li>`;
    }

    html += `</ul>`;
    */
```


For more information about Strings in JavaScript, visit: 
> - [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
> - [W3Schools](https://www.w3schools.com/js/js_strings.asp)
> - [YouTube (Recommended)](https://www.youtube.com/watch?v=Z4x2EgRkJ1g&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=48&pp=iAQB)