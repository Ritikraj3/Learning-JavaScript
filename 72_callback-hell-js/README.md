# Callback Hell in JavaScript

### **What is Callback Hell?**
Callback Hell, also known as "Pyramid of Doom," is a situation in JavaScript where multiple nested callbacks make code difficult to read and maintain. This typically happens when handling asynchronous operations, such as file reading, API calls, or database queries, leading to deeply nested structures.

---

### **How Does Callback Hell Happen?**
When multiple asynchronous tasks depend on the results of previous tasks, developers often use nested callbacks. This can quickly become unmanageable as more tasks are added.

Example of **Callback Hell**:
```js
function firstTask(callback) {
    setTimeout(() => {
        console.log("First task completed");
        callback();
    }, 1000);
}

function secondTask(callback) {
    setTimeout(() => {
        console.log("Second task completed");
        callback();
    }, 1000);
}

function thirdTask(callback) {
    setTimeout(() => {
        console.log("Third task completed");
        callback();
    }, 1000);
}

// Nested callbacks (callback hell)
firstTask(() => {
    secondTask(() => {
        thirdTask(() => {
            console.log("All tasks completed!");
        });
    });
});
```

---

### **Why is Callback Hell a Problem?**
1. **Hard to Read:** Code becomes unreadable due to deep nesting.
2. **Difficult to Debug:** Tracing errors is challenging when functions are deeply nested.
3. **Maintenance Issues:** Any changes require modifying multiple nested layers.
4. **Scalability Problems:** Adding new tasks increases complexity.

---

Would you like an explanation of how to avoid Callback Hell using **Promises** and **Async/Await**? 🚀