# Dialog Boxes in JavaScript

Dialog boxes are commonly used in JavaScript to interact with users and display messages or prompts. There are several types of dialog boxes available:
> - Alert Box
> - Confirm Box
> - Prompt Box

## 1. Alert Box

The `alert()` method displays an alert dialog with a specified message and an OK button.
and it will return `undefined`.

```js
alert('Hello, World!');
```


## 2. Confirm Box

The `confirm()` method displays a dialog box with a message and OK and Cancel buttons. It returns `true` if OK is pressed and `false` if Cancel is pressed.

```js
let result = confirm('Do you want to proceed?');
if (result === true) {
    console.log('User clicked OK');
} else {
    console.log('User clicked Cancel');
}
```


## 3. Prompt Box

The `prompt()` method displays a dialog box that prompts the user for input. It returns the entered text as a `string`, and will return `null` if cancel is pressed which have 
`undefined` datatype . Optionally, you can provide a default value.

```js
let name = prompt('Enter your name:', 'John Doe');
if (name !== null) {
    console.log('Hello, ' + name);
} else {
    console.log('User cancelled the prompt.');
}
```

> ##  *Other properties*
> ###  Using Dialog Boxes Effectively
> 
> - **Alert Box**: Use for displaying important information to the user.
> - **Confirm Box**: Use when user input is needed with a binary choice (OK or Cancel).
> - **Prompt Box**: Use when user input is needed with a text entry.
> 
> ###  Handling User Input
> 
> - Remember to handle user input properly, especially when using `prompt()` to gather data from users.
> - Check the return values to determine user actions in `confirm()` and `prompt()`.
> 
> ###  Compatibility and Styling
> 
> - Dialog boxes have default styling and behavior that may vary slightly between browsers.
> - For custom dialogs, consider using modal dialogs provided by UI frameworks like Bootstrap or custom JavaScript solutions.


For more information about Dialog boxes in JavaScript, visit: 
> - [W3Schools](https://www.w3schools.com/js/js_popup.asp)
> - [YouTube (Recommended)](https://www.youtube.com/watch?v=RFx0PnTqxfI&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=45&pp=iAQB)