# Multidimensional Arrays in JavaScript

A **multidimensional array** is an array containing other arrays as elements. The most common type is a **two-dimensional array** (an array of arrays).

## 1. Creating a Two-Dimensional Array

```js
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
```

In this example, `matrix[0]` returns `[1, 2, 3]`, and `matrix[0][1]` returns `2`.

## 2. Accessing Elements

```js
console.log(matrix[1][2]);  // 6
```

## 3. Looping Through a Two-Dimensional Array

```js
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}
```

## Summary

Multidimensional arrays allow storing complex data structures by nesting arrays inside one another. Accessing or iterating over them requires using multiple indices or nested loops.


### For more information , visit: 
> - [YouTube](https://www.youtube.com/watch?v=hhO8aiDgN9A&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=63&pp=iAQB)