### **Understanding `getAttribute` and `setAttribute`**

These methods are used to interact with the attributes of HTML elements in the DOM (Document Object Model). Here's a detailed explanation of each:

---

### **1. `getAttribute()`**

#### **Purpose:**
- Retrieves the value of a specified attribute from an element.

#### **Syntax:**
```javascript
element.getAttribute(attributeName);
```

#### **Parameters:**
- **`attributeName`** (required): The name of the attribute whose value you want to retrieve (case-insensitive for HTML attributes).

#### **Returns:**
- Returns the value of the attribute as a string.
- If the attribute does not exist, it returns `null`.

#### **Example:**
```html
<button id="myButton" class="btn primary" data-info="Click Me">Click Here</button>

<script>
  const button = document.getElementById("myButton");

  console.log(button.getAttribute("class")); // Output: "btn primary"
  console.log(button.getAttribute("data-info")); // Output: "Click Me"
  console.log(button.getAttribute("type")); // Output: null (not defined)
</script>
```

---

### **2. `setAttribute()`**

#### **Purpose:**
- Sets the value of a specified attribute on an element. If the attribute does not exist, it creates the attribute and assigns the specified value.

#### **Syntax:**
```javascript
element.setAttribute(attributeName, value);
```

#### **Parameters:**
- **`attributeName`** (required): The name of the attribute to set (case-insensitive for HTML attributes).
- **`value`** (required): The value to assign to the attribute.

#### **Example:**
```html
<button id="myButton" class="btn primary">Click Here</button>

<script>
  const button = document.getElementById("myButton");

  button.setAttribute("class", "btn secondary");
  console.log(button.getAttribute("class")); // Output: "btn secondary"

  button.setAttribute("data-role", "action-button");
  console.log(button.getAttribute("data-role")); // Output: "action-button"
</script>
```

---

### **Key Differences Between `getAttribute` and `setAttribute`:**

| Aspect               | `getAttribute`                          | `setAttribute`                          |
|----------------------|-----------------------------------------|-----------------------------------------|
| **Functionality**    | Retrieves the value of an attribute.    | Sets or creates an attribute and assigns a value. |
| **Usage**            | Read-only.                             | Read-write.                             |
| **Non-Existing Attr**| Returns `null` for missing attributes.  | Creates the attribute if it doesn't exist. |

---

### **Use Cases:**

#### **When to use `getAttribute`:**
1. To retrieve custom data attributes (e.g., `data-*`).
2. To check if an attribute exists (returns `null` if it doesn't).
3. To get values of standard attributes like `id`, `class`, `src`, etc.

#### **When to use `setAttribute`:**
1. To dynamically update attributes (e.g., `class`, `style`, `src`).
2. To add custom attributes (e.g., `data-*` for metadata).
3. To set ARIA roles and accessibility properties.

---

### **Special Notes:**
1. **Case Sensitivity:**
   - For HTML, attribute names are case-insensitive (`data-info` and `DATA-INFO` are equivalent).
   - For XML or SVG, attribute names are case-sensitive.

2. **Standard Attributes:**
   - Some attributes like `id`, `class`, and `value` can be manipulated directly using properties (e.g., `element.id` or `element.className`).
   - However, `getAttribute` and `setAttribute` should be used for consistency with non-standard or custom attributes.

3. **Event Listeners:**
   - Attributes like `onclick` should be avoided with `setAttribute`. Instead, use `addEventListener` for better practice.

---

### **Advanced Example: Dynamic Attribute Manipulation**
```html
<img id="profilePic" alt="Profile Picture" />

<script>
  const img = document.getElementById("profilePic");

  // Set attributes dynamically
  img.setAttribute("src", "profile.jpg");
  img.setAttribute("width", "150");

  // Check and log attributes
  console.log(img.getAttribute("src"));  // Output: "profile.jpg"
  console.log(img.getAttribute("width")); // Output: "150"

  // Add a new custom attribute
  img.setAttribute("data-user", "Ritik");
  console.log(img.getAttribute("data-user")); // Output: "Ritik"
</script>
```

This detailed explanation should clarify the usage of `getAttribute` and `setAttribute` for any DOM manipulation needs!