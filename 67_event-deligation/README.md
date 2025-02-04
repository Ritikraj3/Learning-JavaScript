# Event Delegation in JavaScript

## Introduction
Event delegation is a technique in JavaScript where a single event listener is added to a parent element instead of multiple event listeners on individual child elements. This improves performance and helps manage dynamically added elements efficiently.

## How Event Delegation Works
Instead of adding event listeners to each child element, the event is added to a parent, and it captures the event when it bubbles up from its children.

### Example:
```javascript
const container = document.querySelector('.container');

container.addEventListener('click', (event) => {
    if (event.target.classList.contains('card')) {
        alert(`Card ${event.target.innerText} clicked`);
    }
});
```

**Explanation:**
- The event listener is added to `.container` instead of individual `.card` elements.
- When a child `.card` is clicked, `event.target` identifies the clicked element.
- This works even if new `.card` elements are added dynamically.

## Benefits of Event Delegation
1. **Performance Optimization** – Reduces the number of event listeners.
2. **Handles Dynamic Elements** – Works on elements added after the initial page load.
3. **Cleaner Code** – Avoids redundant event listeners.

## Example: Adding Dynamic Elements
```javascript
const container = document.querySelector('.container');
const addCardBtn = document.querySelector('.add-card-btn');
let count = 1;

addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.innerText = count++;
    container.appendChild(newCard);
});
```

Even though new `.card` elements are created dynamically, the event delegation on `.container` ensures that clicks on any card are detected.

## Conclusion
Event delegation is a powerful technique for handling events efficiently, especially when dealing with a large number of elements or dynamically generated content. By leveraging event bubbling, it simplifies event management and improves performance.

