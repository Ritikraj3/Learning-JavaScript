# Random Dog Image Fetcher

## Description
This project is a simple web application that fetches and displays a random dog image from an API when a button is clicked. The application utilizes JavaScript's Fetch API to retrieve data from an external source and dynamically updates the webpage accordingly.

## Technologies Used
- HTML
- CSS (if styling is applied)
- JavaScript (Vanilla JS)
- Dog CEO's Dog API

## Code Explanation

### Selecting Elements
```javascript
const image = document.querySelector('img')
const button = document.querySelector('button')
```
- The `querySelector` method is used to select the `img` and `button` elements from the HTML document.
- `image` holds a reference to the `<img>` tag where the dog image will be displayed.
- `button` holds a reference to the `<button>` tag, which will be used to trigger the image change.

### Adding Event Listener
```javascript
button.addEventListener('click', () => {
```
- The `addEventListener` method is used to listen for a `click` event on the button.
- When the button is clicked, the provided callback function executes.

### Fetching Data from API
```javascript
fetch('https://dog.ceo/api/breeds/image/random')
```
- The `fetch` function sends an HTTP GET request to `https://dog.ceo/api/breeds/image/random`.
- This API returns a JSON response containing a randomly selected dog image URL.

### Handling the Response
```javascript
.then(response => response.json())
```
- The first `.then()` method receives the HTTP response and converts it into a JavaScript object using `response.json()`.
- Since fetching data from an API is asynchronous, the function returns a promise that resolves with the parsed JSON data.

### Updating the Image Source
```javascript
.then(json => {
  image.src = json.message
})
```
- The second `.then()` method receives the parsed JSON object.
- The API response contains a `message` property that holds the URL of the random dog image.
- The `image.src` property is updated with the new URL, dynamically changing the displayed image.

## How It Works
1. The user loads the webpage, which contains an image and a button.
2. When the button is clicked:
   - A request is sent to the Dog CEO API to fetch a random dog image.
   - The response is processed, extracting the image URL.
   - The `src` attribute of the `img` element is updated with the new image URL.
   - The image on the webpage changes to a new random dog picture.

## Prerequisites
- An HTML file containing an `<img>` and `<button>` element.
- An internet connection to fetch data from the external API.

## Example HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Dog Image</title>
</head>
<body>
    <img src="" alt="Random Dog Image" width="300">
    <button>Get Random Dog</button>
    <script src="script.js"></script>
</body>
</html>
```

## Conclusion
This project demonstrates how to fetch and display dynamic content from an external API using JavaScript. The key concepts covered include event handling, API requests, promises, and DOM manipulation. It is a great beginner-friendly project to understand how JavaScript interacts with external data sources.

