# Event Bubbling and Event Capturing in JavaScript

## Introduction
Event handling in JavaScript follows two important propagation models: **Event Bubbling** and **Event Capturing**. These models define how events propagate through the DOM tree, determining whether an event is handled by the target element first or its ancestors.

## What is Event Bubbling?
Event bubbling occurs when an event starts from the target element and propagates **upwards** to its ancestors.

### Example:
```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Event Bubbling Example</title>
</head>
<body>
    <div id="parent" style="padding: 20px; background-color: lightblue;">
        Parent Div
        <button id="child">Click Me</button>
    </div>
    <script>
        document.getElementById("parent").addEventListener("click", function() {
            alert("Parent Div Clicked - Bubbling!");
        });
        
        document.getElementById("child").addEventListener("click", function() {
            alert("Button Clicked");
        });
    </script>
</body>
</html>
```
### Explanation:
1. Clicking the button triggers its `click` event.
2. The event **bubbles up** to the parent `<div>`, triggering its event listener.
3. Alerts display **“Button Clicked”** first, followed by **“Parent Div Clicked - Bubbling!”**.

## What is Event Capturing (Trickling)?
Event capturing, also known as event trickling, is the opposite of bubbling. The event starts at the **top-most** element and propagates **downward** to the target element.

### Example:
```javascript
document.getElementById("parent").addEventListener("click", function() {
    alert("Parent Div Clicked - Capturing!");
}, true);

document.getElementById("child").addEventListener("click", function() {
    alert("Button Clicked");
});
```
### Explanation:
1. The `true` parameter in `addEventListener` makes the parent capture the event **before** it reaches the button.
2. Clicking the button triggers the parent event first, followed by the button event.
3. Alerts display **“Parent Div Clicked - Capturing!”** first, then **“Button Clicked”**.

## Stopping Event Propagation
Sometimes, we may want to prevent an event from propagating further using `event.stopPropagation()`.

### Example:
```javascript
document.getElementById("child").addEventListener("click", function(event) {
    alert("Button Clicked");
    event.stopPropagation(); // Stops the event from bubbling up
});
```
This prevents the event from reaching the parent, stopping the bubbling process.

## Conclusion
- **Event Bubbling**: Event flows from the target element **upwards**.
- **Event Capturing**: Event flows from the document root **down to the target**.
- `event.stopPropagation()` can stop unwanted event propagation.

Understanding these concepts is essential for effective event handling in JavaScript applications.

