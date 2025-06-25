const message = "hello"
const faltu = "         Wazir is a Bad boy       "
const strLength = faltu.length

const str = faltu.trim()
const str1 = faltu.trimStart()
const str2 = faltu.trimEnd()
const strUpperCase = faltu.trim().toUpperCase()
const strLowerCase = faltu.trim().toLowerCase()
console.log(strLength); // 24
console.log(str.length) // 21
console.log(str)              // "Wazir is a Bad boy"
console.log(str1)             // "Wazir is a Bad boy       "
console.log(str2);            //"         Wazir is a Bad boy"
console.log(strUpperCase);    // "WAZIR IS A BAD BOY"
console.log(strLowerCase);    // "wazir is a bad boy";

const isContain = str.includes('ir')
const isNotContain = strLowerCase.includes('ar')
console.log(isContain);       // true
console.log(isNotContain);    // false;

const indexB = str.indexOf('B')
const indexa = str.indexOf('a')
const indexd = str.indexOf('d')
const indexir = str.indexOf('ir')
const indexWazir = str.indexOf('Wazir')
const indexS = str.indexOf('S')
console.log(indexB);     // 11
console.log(indexa);     // 1
console.log(indexd);     // 13
console.log(indexir);    // 3
console.log(indexWazir); // 0
console.log(indexS);     // -1

const replacedStr = str.replace('Bad', 'Good')
const replacedAllStr = str.replaceAll('a', 'x')
console.log(replacedStr);    // "Wazir is a Good boy"
console.log(replacedAllStr); // "Wxzir is x Bxd boy"

const concatStr = message.concat(faltu)
const concatStr1 = message.concat('+ ', faltu)
const concatStr2 = message.concat(', ', str, faltu)
console.log(concatStr);   //hello         Wazir is a Bad boy       
console.log(concatStr1);  //hello +         Wazir is a Bad boy
console.log(concatStr2);  //hello, Wazir is a Bad boy         Wazir is a Bad boy       

const digit = '3210'
const lastFourDigit = digit.padStart(10, '*')
const maskedAccNumber = digit.padStart(16, '*')
const paddedStr = message.padStart(15, '*')
console.log(lastFourDigit);  //******3210
console.log(maskedAccNumber); //**********3210
console.log(paddedStr);      //**********hello

const firstFourDigit = digit.padEnd(10, '*')
const paddedEnd = message.padEnd(15, '*')
console.log(firstFourDigit);  //******3210
console.log(paddedEnd);      //**********hello

console.log(message.charAt(0)); // h
console.log(str.charAt(6));     // i
console.log(digit.charAt(2));   // 1
console.log(message.charCodeAt(0)); // 104
console.log(str.charCodeAt(6));     // 105
console.log(digit.charCodeAt(2));   // 49 

const splitStr = str.split(' ')
const splitStr1 = str.split('')
const splitStr2 = str.split('a')
console.log(splitStr);  // ["Wazir", "is", "a", "Bad", "boy"]
console.log(splitStr1); // ['W', 'a', 'z', 'i', 'r', ' ', 'i', 's', ' ', 'a', ' ', 'B', 'a', 'd', ' ', 'b', 'o', 'y']
console.log(splitStr2); // ['W', 'zir is ', ' B', 'd boy']

console.log(str.charAt(0))              // W
console.log(str.charCodeAt(0))         // 87
console.log(str.concat(faltu))         // Wazir is a Bad boy         Wazir is a Bad boy
console.log(str.endsWith("o"))         // true
console.log(str.includes("ll"))        // true
console.log(str.indexOf("l"))          // 2
console.log(str.lastIndexOf("l"))      // 3
console.log(str.localeCompare("hello"))// 1
console.log(str.match(/h/g))           // ["h", "h"]
console.log(str.repeat(2))             // Wazir is a Bad boyWazir is a Bad boy
console.log(str.replace("hello", "wazir")) // wazir is a Bad boy
console.log(str.search(/h/g))          // 0
console.log(str.slice(1, 4))           // az
console.log(str.split("", 4))          // ["W", "a", "z", "i"]
console.log(str.startsWith("h"))       // true
console.log(str.substring(1, 4))       // az
console.log(str.toLocaleLowerCase())   // wazir is a bad boy
console.log(str.toLocaleUpperCase())   // WAZIR IS A BAD BOY
console.log(str.toLowerCase())         // wazir is a bad boy
console.log(str.toUpperCase())         // WAZIR IS A BAD BOY
console.log(str.trim())                // Wazir is a Bad boy
console.log(str.trimEnd())             // Wazir is a Bad boy
console.log(str.trimStart())           // Wazir is a Bad boy
console.log(str.valueOf())             // Wazir is a Bad boy
console.log(str.toString())            // Wazir is a Bad boy
 

const multilineStr = `This is a
multiline string
that spans across
multiple lines.`;
console.log(multilineStr);

const name = 'Alice';
const greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, Alice!

const count = 5;
const message0 = `There are ${count} apples in the basket.`;
console.log(message0); // There are 5 apples in the basket.

const price = 19.99;
const formattedPrice = `The price is $${price.toFixed(2)}.`;
console.log(formattedPrice); // The price is $19.99.

const str5 = 'Hello, World!';
const output = `The string is: ${str5}`;
console.log(output); // The string is: Hello, World!

const age = 25;
const message1 = `The age is ${age > 18 ? 'old enough' : 'not old enough'} to vote.`;
console.log(message1); // The age is old enough to vote.